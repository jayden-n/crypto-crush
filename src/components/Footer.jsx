import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTwitter, FaTiktok } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  //   const foundedYear = 2023;
  const currentYear = new Date().getFullYear();

  return (
    <div className="rounded-div  bottom-0 mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex w-full justify-evenly md:max-w-[300px]">
          <div>
            <h2 className="mb-2 text-xl font-bold">Support</h2>
            <ul>
              <li className="cursor-not-allowed py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">
                <a
                  href="https://www.forbes.com/advisor/investing/cryptocurrency/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Investing Guide
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-4">
            <h2 className="mb-2 text-xl font-bold">For Developers</h2>
            <ul>
              <li className="py-2 text-sm">
                <a
                  href="https://apiguide.coingecko.com/others/api-status"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  API Status
                </a>
              </li>
              <li className="py-2 text-sm">
                <a
                  href="https://www.coingecko.com/api/documentation"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="flex w-full justify-end">
            <div className="relative w-full py-4 md:w-[300px]">
              <div className="mt-[-1rem] flex justify-center py-4 md:justify-end md:py-0 md:pb-4">
                <ThemeToggle />
              </div>
              <p className="text-center text-xl font-bold md:text-right">
                Sign up for crypto news!
              </p>
              <div className="py-4">
                <div>
                  <input
                    className="mr-2 w-full cursor-not-allowed rounded-md border border-input bg-thirdary p-2 shadow-xl md:w-auto"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button className="my-2 w-full cursor-not-allowed rounded-md bg-button p-2 px-4 font-bold text-btnText shadow-xl hover:shadow-2xl md:w-auto">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-4 pb-2 pt-4 text-accent ">
                <AiOutlineInstagram className="cursor-not-allowed" />
                <FaFacebookF className="cursor-not-allowed" />
                <FaTwitter className="cursor-not-allowed" />
                <FaGithub className="cursor-not-allowed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-6 pt-4 text-center text-sm">
        &copy; {currentYear} CryptoCrush, Inc. All rights reserved.
        <br />
        Powered by{" "}
        <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline"
        >
          Coin Gecko
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
