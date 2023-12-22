import { Navigate, useNavigate } from "react-router-dom";
import SavedCoins from "../components/wishlist/SavedCoins";
import { UserAuth } from "../context/AuthContext";

const AccountPage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // protected route: must be signed in to see account page
  if (user) {
    return (
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-div my-12 flex items-center justify-between py-8">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p className="mt-2 text-xl">
                Welcome aboard,{" "}
                <span className="text-accent">{user?.email}</span>
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="whitespace-nowrap rounded-md border  px-4 py-2 font-medium "
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="rounded-div my-12 flex items-center justify-between py-8">
          <div className="min-h-[300px] w-full">
            <h1 className="py-4 text-2xl font-bold">Watch List</h1>
            <SavedCoins />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AccountPage;
