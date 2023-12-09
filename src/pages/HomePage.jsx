/* eslint-disable react/prop-types */
import CoinSearch from "../components/CoinSearch";
import TrendingCoins from "../components/TrendingCoins";

const HomePage = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <TrendingCoins coins={coins} />
    </div>
  );
};

export default HomePage;
