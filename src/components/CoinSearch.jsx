import { AiOutlineStar } from "react-icons/ai";

/* eslint-disable react/prop-types */
const CoinSearch = ({ coins }) => {
  return (
    // Searching Coins
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Search a coin..." />
        </form>
      </div>

      {/* Header Table */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Market</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>

        {/* Coins Info Table */}
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <AiOutlineStar />
              </td>
              <td>{coin?.market_cap_rank}</td>
              <td>
                <div>
                  {" "}
                  <img src={coin.image} alt={coin.id} />
                  <p>{coin.name}</p>
                </div>
              </td>

              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.sparkline_in_7d.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
