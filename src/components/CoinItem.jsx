/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const CoinItem = ({ coin }) => {
  const { theme } = useContext(ThemeContext);
  const fillColor = theme === "dark" ? "#fcba29" : "#8e44af";

  return (
    <tr className="h-[78px] overflow-hidden border-b ">
      <td>
        <AiOutlineStar />
      </td>

      {/* Coin Ranking */}
      <td>{coin?.market_cap_rank}</td>

      {/* Coins Name */}
      <td>
        <div className="flex items-center">
          <img
            className="mr-3 w-11 rounded-full"
            src={coin.image}
            alt={coin.id}
          />
          <p className="hidden sm:table-cell">{coin.name}</p>
        </div>
      </td>
      {/* Coins Name Symbol */}
      <td>{coin?.symbol.toUpperCase()}</td>

      {/* Current Price */}
      <td>
        C
        {coin?.current_price.toLocaleString("en-CA", {
          style: "currency",
          currency: "CAD",
        })}{" "}
      </td>

      {/* 24H Price Change */}
      <td>
        {coin?.price_change_percentage_24h > 0 ? (
          <p className="rounded-full border bg-green-100 text-green-500">
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="rounded-full border bg-red-100 text-red-500">
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>

      {/* 24H Volume */}
      <td className="hidden w-[180px] md:table-cell">
        C${coin?.total_volume.toLocaleString()}
      </td>

      {/* Volume */}
      <td className="hidden w-[180px] sm:table-cell">
        C${coin?.market_cap.toLocaleString()}
      </td>

      {/* Last 7 days GRAPH */}
      <td>
        {/* data must be an array */}
        <Sparklines data={coin.sparkline_in_7d.price} limit={17}>
          <SparklinesLine
            style={{
              stroke: "none",
              fill: fillColor,
              fillOpacity: "1",
            }}
          />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
