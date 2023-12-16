import SavedCoins from "../components/wishlist/SavedCoins";

const AccountPage = () => {
  return (
    <div className="mx-auto max-w-[1140px]">
      <div className="rounded-div my-12 flex items-center justify-between py-8">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button className="whitespace-nowrap rounded-md border  px-4 py-2 font-medium ">
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
};

export default AccountPage;
