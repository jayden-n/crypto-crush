/* eslint-disable react/prop-types */
export const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="flex h-16 w-16 items-center justify-center text-thirdary transition-colors hover:bg-secondary md:h-24 md:w-24"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};
