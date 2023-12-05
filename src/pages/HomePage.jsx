import CoinSearch from "../components/CoinSearch";

const HomePage = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  );
};

export default HomePage;
