import { useState } from "react";
import CoinItem from "./CoinItem";

/* eslint-disable react/prop-types */
const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    // Searching Coins
    <div className="rounded-div my-4">
      <div className="flex flex-col justify-between pb-6 pt-4 text-center md:flex-row md:text-right">
        <h1 className="my-2 text-xl font-bold">Search Crypto</h1>
        <form>
          <input
            onChange={handleSearchText}
            type="text"
            placeholder="Search a coin..."
            className="bg-thirdary w-full rounded-2xl border border-input px-4 py-2 shadow-xl"
          />
        </form>
      </div>

      {/* Header Table */}
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className=" px-4">#</th>
            <th className=" text-left">Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th className=" mr-2 hidden md:table-cell">24h Volume</th>
            <th className=" hidden sm:table-cell">Market</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>

        {/* Coins Info Table */}
        <tbody>
          {coins
            .filter((value) => {
              /* filtering coins by lowercase names */
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem coin={coin} key={coin.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
