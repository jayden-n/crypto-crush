import { useEffect, useState } from "react";
import { fetchTrendingCoinsApi } from "../services/api/fetchTrendingCoinsApi";
import { Link } from "react-router-dom";
import NotFoundLoader from "./loader/NotFoundLoader";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrendingCoins = async () => {
    try {
      const trendingCoinsData = await fetchTrendingCoinsApi();

      setTrendingCoins(trendingCoinsData);
      setLoading(false); // Set loading to false when data is received
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="rounded-div my-12 py-8 text-sm text-primary">
      <h1 className="mb-8 py-4 text-center text-2xl font-semibold italic text-accent sm:text-left">
        Trending coins
      </h1>
      {loading ? ( // Conditionally render the loader or content based on loading state
        <div className="text-center">
          <h1 className="mt-10 text-3xl font-bold tracking-tight sm:text-5xl">
            <NotFoundLoader />
            Something went wrong!
          </h1>
          <p className="mb-12 mt-6 text-xl leading-7 text-accent">
            Due to using a free API, the data is limited to 10-30 calls/minute.
            Please try again later.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* just getting 6 coins on trending */}
          {trendingCoins.slice(0, 6).map((coin, index) => (
            <div key={index} onClick={scrollToTop}>
              <Link to={`/coin/${coin?.item?.id}`}>
                <div className="rounded-div flex justify-between border p-5 duration-300 ease-in-out hover:scale-105">
                  <div className="flex w-full items-center justify-between ">
                    <div className="flex">
                      <img
                        className="mr-3 w-11 rounded-full"
                        src={coin.item.small}
                        alt={coin.item.name}
                      />
                      <div>
                        <p className="font-bold">{coin.item.name}</p>
                        <p>{coin.item.symbol}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="mr-2 w-4"
                        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                        alt="bitcoin currency image"
                      />
                      <p>{coin.item.price_btc.toFixed(7)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingCoins;
