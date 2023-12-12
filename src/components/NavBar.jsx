import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Logo from "../assets/favicon.ico";

const NavBar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleIsMobileScreen = () => {
    setIsMobileScreen(!isMobileScreen);
  };

  return (
    // <nav className="rounded-div flex h-20 items-center justify-between font-bold duration-300 ease-in">
    <nav className="relative mx-auto flex h-20 w-full max-w-[1140px] items-center justify-between border-b-[1px] bg-primary p-4 font-bold">
      {/* Desktop Menu */}
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} alt="Crypto Crush Logo" className="mr-2 w-12" />
          <p className="text-2xl">CryptoCrush</p>
        </div>
      </Link>

      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      <div className="hidden md:block">
        <Link to="/login" className="whitespace-nowrap p-4 hover:text-thirdary">
          Log In
        </Link>
        <Link
          to="/signup"
          className="whitespace-nowrap rounded-md bg-button px-4 py-2 font-medium text-main"
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
    </nav>
  );
};

export default NavBar;
