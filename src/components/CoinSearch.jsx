/* eslint-disable react/prop-types */
import { useState } from "react";
import CoinItem from "./CoinItem";
import { debounce } from "lodash";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(coins);

  const delayedSearch = debounce((text) => {
    // filtered coins
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredCoins(filtered);
  }, 400);

  const handleSearchText = (e) => {
    const inputText = e.target.value.trim();
    // debounce in action
    delayedSearch(inputText);

    // for displaying when users type a non-existed coin
    setSearchText(inputText);
  };

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col justify-between pb-6 pt-4 text-center md:flex-row md:text-right">
        <h1 className="my-2 text-xl font-bold">Search Crypto</h1>
        <form>
          <input
            onChange={handleSearchText}
            type="text"
            placeholder="Search a coin..."
            className="w-full rounded-2xl border border-input bg-thirdary px-4 py-2 shadow-xl"
          />
        </form>
      </div>

      {filteredCoins.length === 0 ? (
        <div className="text-center">
          <p className="mb-14 text-2xl font-bold text-red-500">
            No coin was found for: &quot;{searchText}&quot; :(
          </p>
        </div>
      ) : (
        <table className="w-full border-collapse text-center text-sm">
          <thead>
            <tr className="h-[50px] border-b">
              <th></th>
              <th className="px-4">#</th>
              <th className="text-left">Coin</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24h</th>
              <th className="mr-2 hidden md:table-cell">24h Volume</th>
              <th className="hidden sm:table-cell">Market</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>

          <tbody>
            {filteredCoins.map((coin) => (
              <CoinItem coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinSearch;
