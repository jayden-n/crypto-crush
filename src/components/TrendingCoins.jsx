import { useEffect, useState } from "react";
import { fetchTrendingCoinsApi } from "../services/api/fetchTrendingCoinsApi";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const trendingCoinsData = await fetchTrendingCoinsApi();

      setTrendingCoins(trendingCoinsData);
      //   console.log(coins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-sm text-primary">
      <h1 className="py-4 text-2xl font-bold">Trending coins</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* just getting 6 coins on trending */}
        {trendingCoins.slice(0, 6).map((coin, index) => (
          <div
            key={index}
            className="rounded-div flex justify-between border p-5 duration-300 ease-in-out hover:scale-105"
          >
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
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
