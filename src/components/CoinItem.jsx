/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

import { PiTrendDownBold } from "react-icons/pi";
import { PiTrendUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
  return (
    // NOTE: border-slate-400 add this
    <tr className="h-[78px] overflow-hidden border-b  duration-75 ease-in hover:bg-secondary ">
      <td>
        <AiOutlineStar size={18} />
      </td>

      {/* Coin Ranking */}
      <td>{coin?.market_cap_rank}</td>

      {/* Coins Name */}
      <td>
        {/* dynamic link */}
        <Link to={`/coin/${coin?.id}`}>
          <div className="flex items-center">
            <img
              className="mr-2 w-6 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="hidden text-sm font-semibold hover:underline sm:table-cell">
              {coin.name}
            </p>
          </div>
        </Link>
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
      <td className="px-4">
        {coin?.price_change_percentage_24h > 0 ? (
          <p className="flex items-center justify-center rounded-full border bg-green-100 text-green-500">
            <PiTrendUpBold className="mr-2 mt-0.5" size={15} />
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="flex items-center justify-center rounded-full border bg-red-100 text-red-500">
            <PiTrendDownBold className="mr-2" size={15} />
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
        {/* <Sparklines data={coin.sparkline_in_7d.price} limit={17}>
          <SparklinesLine
            style={{
              stroke: "none",
              fill: fillColor,
              fillOpacity: "1",
            }}
          />
        </Sparklines> */}
        <Link to={`/coin/${coin?.id}`}>
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine
              style={{
                strokeWidth: 3,

                // conditional rendering when price goes down/up
                stroke:
                  coin.sparkline_in_7d.price[0] <=
                  coin.sparkline_in_7d.price[
                    coin.sparkline_in_7d.price.length - 1
                  ]
                    ? "#00cc00"
                    : "#ff0000",
                fill: "none",
              }}
            />
          </Sparklines>
        </Link>
      </td>
    </tr>
  );
};

export default CoinItem;
