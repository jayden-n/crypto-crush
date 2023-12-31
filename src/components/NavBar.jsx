import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Logo from "../assets/favicon.ico";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleIsMobileScreen = () => {
    setIsMobileScreen(!isMobileScreen);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // <nav className="rounded-div flex h-20 items-center justify-between font-bold duration-300 ease-in">
    <nav className="h-21 relative mx-auto flex w-full max-w-[1140px] items-center justify-between border-b-[1px] bg-primary p-4 font-bold">
      {/* Desktop Menu */}
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} alt="Crypto Crush Logo" className="mr-2 w-12" />
          <p className="text-2xl">CryptoCrush</p>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {user?.email ? (
          <div className="hidden md:block">
            <Link
              to="/account"
              className="whitespace-nowrap p-4 hover:text-thirdary"
            >
              Account
            </Link>
            <button
              onClick={handleSignOut}
              className="whitespace-nowrap rounded-md bg-button px-4 py-2 font-medium text-main"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link
              to="/login"
              className="whitespace-nowrap p-4 hover:text-thirdary"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="whitespace-nowrap rounded-md bg-button px-4 py-2 font-medium text-main"
            >
              Sign Up
            </Link>
          </div>
        )}
        {/* <div className="hidden md:block">
          <Link
            to="/login"
            className="whitespace-nowrap p-4 hover:text-thirdary"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="whitespace-nowrap rounded-md bg-button px-4 py-2 font-medium text-main"
          >
            Sign Up
          </Link>
        </div> */}
      </div>
      {/* Menu Hamburger */}
      <div
        onClick={handleIsMobileScreen}
        className="z-10 block cursor-pointer md:hidden"
      >
        {isMobileScreen ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          isMobileScreen
            ? "fixed left-0 top-20 z-10 flex h-[90%] w-full flex-col items-center justify-between bg-primary duration-300 ease-in md:hidden"
            : "fixed left-[-100%] top-20 flex h-[90%] flex-col items-center justify-between duration-300 ease-in"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleIsMobileScreen} className="border-b py-6">
            <Link to="/">Home</Link>
          </li>

          <li onClick={handleIsMobileScreen} className="border-b py-6">
            <Link to="/account">Account</Link>
          </li>

          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex w-full flex-col p-4">
          <Link to="/login">
            <button
              onClick={handleIsMobileScreen}
              className="my-2 w-full rounded-md border border-secondary bg-primary p-3 text-primary shadow-xl"
            >
              Log in
            </button>
          </Link>

          <Link to="/signup">
            <button
              onClick={handleIsMobileScreen}
              className="my-2 w-full rounded-md bg-button p-3 text-btnText shadow-xl"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
