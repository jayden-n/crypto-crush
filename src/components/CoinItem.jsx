/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const CoinItem = ({ coin }) => {
  return (
    <tr className="h-[80px] overflow-hidden border-b">
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin?.market_cap_rank}</td>
      <td>
        <div className="flex items-center">
          <img
            className="mr-2 w-6 rounded-full"
            src={coin.image}
            alt={coin.id}
          />
          <p className="hidden sm:table-cell">{coin.name}</p>
        </div>
      </td>

      <td>{coin?.symbol}</td>
      <td>{coin?.current_price}</td>
      <td>{coin?.price_change_percentage_24h}</td>
      <td className="hidden w-[180px] md:table-cell">{coin?.total_volume}</td>
      <td className="hidden w-[180px] sm:table-cell">{coin?.market_cap}</td>
      <td>
        {/* data must be an array */}
        <Sparklines data={coin.sparkline_in_7d.price} limit={17}>
          <SparklinesLine
            style={{
              stroke: "none",
              fill: "#8e44af",
              fillOpacity: "1",
            }}
          />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
