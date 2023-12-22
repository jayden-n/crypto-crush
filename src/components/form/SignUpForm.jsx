import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Password validation
    if (password !== document.getElementById("rt-password-input").value) {
      setError("Passwords do not match");
      return; // Do not proceed with sign-up if passwords do not match
    }

    try {
      // Continue with sign-up if passwords match
      await signUp(email, password);
      navigate("/account"); // Redirect to "/account" after successful sign-up
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-semibold"
        >
          Create your account
        </motion.h1>
        <motion.p variants={primaryVariants} className="mb-8 text-center">
          Try it for free, no CC required
        </motion.p>
        {error ? <p className="my-2 bg-red-300 p-3">{error}</p> : null}

        <form onSubmit={handleSubmit} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email-input"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5  py-1.5 text-black focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password-input"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded border-[1px] border-slate-300 px-2.5  py-1.5 text-black focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label
              htmlFor="rt-password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Re-type Password<span className="text-red-600">*</span>
            </label>
            <input
              id="rt-password-input"
              type="password"
              placeholder="Re-type your password"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 text-black focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div
            variants={primaryVariants}
            className="mb-4 flex w-full items-start gap-1.5"
          >
            <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4 w-4 accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              By signing up, I agree to the terms and conditions, privacy
              policy, and cookie policy
            </label>
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            className="mb-1.5 w-full rounded bg-button px-4 py-2 text-center font-medium text-main transition-colors"
          >
            Sign up
          </motion.button>
          <motion.p variants={primaryVariants} className="text-xs">
            Already have an account?{" "}
            <Link to="/login" className="text-accent underline">
              Log In
            </Link>
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
};
