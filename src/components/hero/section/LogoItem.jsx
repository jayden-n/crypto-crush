/* eslint-disable react/prop-types */
export const LogoItem = ({ Icon }) => {
  return (
    <div className="flex h-16 w-16 cursor-not-allowed items-center justify-center text-thirdary transition-colors hover:bg-secondary md:h-24 md:w-24">
      <Icon className="text-4xl md:text-5xl" />
    </div>
  );
};
