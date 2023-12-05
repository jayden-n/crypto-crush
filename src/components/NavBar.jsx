import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleIsMobileScreen = () => {
    setIsMobileScreen(!isMobileScreen);
  };

  return (
    <div className="rounded-div flex h-20 items-center justify-between font-bold duration-300 ease-in">
      {/* Desktop Menu */}
      <Link to="/">
        <h1 className="text-2xl">CryptoCrush</h1>
      </Link>

      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      <div className="hidden md:block">
        <Link to="/login" className="p-4 hover:text-accent">
          Log In
        </Link>
        <Link
          to="/signup"
          className="hover:2xl ml-2 rounded-2xl bg-button px-5 py-2 text-btnText shadow-lg"
        >
          Sign Up
        </Link>
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
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>

          <li className="border-b py-6">
            <Link to="/account">Account</Link>
          </li>

          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex w-full flex-col p-4">
          <Link to="/login">
            <button className="my-2 w-full rounded-2xl border border-secondary bg-primary p-3 text-primary shadow-xl">
              Log in
            </button>
          </Link>

          <Link to="/signup">
            <button className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
