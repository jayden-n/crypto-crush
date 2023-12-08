import CoinSearch from "../components/CoinSearch";
import TrendingCoins from "../components/TrendingCoins";

const HomePage = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <TrendingCoins />
    </div>
  );
};

export default HomePage;
