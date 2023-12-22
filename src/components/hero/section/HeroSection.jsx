/* eslint-disable react/prop-types */
import { RoundedSlideButton } from "../button/RoundedSlideButton";
import { TranslateWrapper } from "./TranslateWrapper";
import { LogoItemsTop } from "./LogoItemsTop";
import { LogoItemsBottom } from "./LogoItemsBottom";

const HeroSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1140px] bg-primary pb-12">
      <div className="flex w-full flex-col items-center px-8 py-12 md:py-20">
        <h1 className="max-w-[40.5rem] text-center text-4xl font-semibold md:text-6xl">
          The easiest way to scale your crypto analytics
        </h1>
        <p className="my-6 max-w-xl text-center">
          Discover, track, and save cryptocurrencies effortlessly with our
          user-friendly platform. Your crypto journey simplified!
        </p>

        {/* <button className="bg-button px-8 py-2 text-base font-medium text-white shadow-[3px_3px_0_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0_black] md:text-lg">
          Try it free
        </button> */}

        <RoundedSlideButton />
      </div>

      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="mt-4 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
