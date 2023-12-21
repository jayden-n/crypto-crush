/* eslint-disable react/prop-types */
import CoinSearch from "../components/CoinSearch";
import HeroSection from "../components/hero/section/HeroSection";
import TrendingCoins from "../components/TrendingCoins";

const HomePage = ({ coins }) => {
  return (
    <div>
      <HeroSection />
      <CoinSearch coins={coins} />
      <TrendingCoins coins={coins} />
    </div>
  );
};

export default HomePage;
