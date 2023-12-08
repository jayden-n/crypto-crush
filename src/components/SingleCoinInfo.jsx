import { useContext } from "react";
import { FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { ThemeContext } from "../context/ThemeContext";

/* eslint-disable react/prop-types */
const SingleCoinInfo = ({ coin }) => {
  const { theme } = useContext(ThemeContext);
  const fillColor = theme === "dark" ? "#fcba29" : "#8e44af";

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <div className="flex items-center justify-between">
          {coin?.market_data?.current_price ? (
            <p className="text-3xl font-bold">
              C
              {coin?.market_data?.current_price?.cad.toLocaleString("en-CA", {
                style: "currency",
                currency: "CAD",
              })}
            </p>
          ) : null}
          <p>7 days</p>
        </div>
        <div>
          <Sparklines data={coin?.market_data?.sparkline_7d.price} limit={20}>
            <SparklinesLine
              style={{
                stroke: "none",
                fill: fillColor,
                fillOpacity: "1",
              }}
            />
          </Sparklines>
        </div>

        <div className="flex flex-col  py-4">
          {/* Categories */}
          <div className="py-2">
            <p className="text-sm text-gray-500">Categories</p>
            {coin?.categories ? coin.categories.join(", ") : null}
          </div>

          {/* Genesis (date) */}
          <div className="py-2">
            <p className="text-sm text-gray-500">Genesis</p>
            {coin?.genesis_date ? (
              <span>
                {new Date(coin.genesis_date).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            ) : (
              <span>Invalid date</span>
            )}
          </div>

          {/* 24h high */}
          <div className="py-2">
            <p className="text-sm text-gray-500"> 24h High</p>
            {coin?.market_data?.high_24h ? (
              <p>C${coin?.market_data?.high_24h.cad.toLocaleString()}</p>
            ) : null}
          </div>

          {/* 24h low */}
          <div className="py-2">
            <p className="text-sm text-gray-500"> 24h Low</p>
            {coin?.market_data?.low_24h ? (
              <p>C${coin?.market_data?.low_24h.cad.toLocaleString()}</p>
            ) : null}
          </div>
        </div>

        {/* <div className="flex justify-between "></div> */}
      </div>

      {/* market stats */}
      <div>
        <p className="text-2xl font-bold">Market Stats</p>
        <div className="flex justify-between py-4">
          <div>
            <p className="text-sm text-gray-500">Market Rank</p>
            {coin?.market_cap_rank}
          </div>
          <div>
            <p className="text-sm text-gray-500">Hashing Algorithm</p>
            {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
          </div>
          <div>
            <p className="text-sm text-gray-500">Trust Score</p>
            {coin?.tickers ? <p>{coin?.liquidity_score.toFixed(2)}</p> : null}
          </div>
        </div>

        {/* price change in 2 weeks */}
        <div className="flex justify-between py-4">
          <div>
            <p className="text-sm text-gray-500">Price Change (24h)</p>
            {coin?.market_data
              ? coin?.market_data?.price_change_percentage_24h.toFixed(2)
              : null}
            %
          </div>
          <div>
            <p className="text-sm text-gray-500">Price Change (7d)</p>
            {coin?.market_data
              ? coin?.market_data?.price_change_percentage_7d.toFixed(2)
              : null}
            %
          </div>
          <div>
            <p className="text-sm text-gray-500">Price Change (14d)</p>
            {coin?.market_data
              ? coin?.market_data?.price_change_percentage_14d.toFixed(2)
              : null}
            %
          </div>
        </div>

        {/* price change in long term */}
        <div className="flex justify-between py-4">
          <div>
            <p className="text-sm text-gray-500">Price Change (30d)</p>
            {coin?.market_data
              ? coin?.market_data?.price_change_percentage_30d.toFixed(2)
              : null}
            %
          </div>
          <div>
            <p className="text-sm text-gray-500">Price Change (60d)</p>
            {coin?.market_data
              ? coin?.market_data?.price_change_percentage_60d.toFixed(2)
              : null}
            %
          </div>
          <div>
            <p className="text-sm text-gray-500">Price Change (1y)</p>
            {coin?.market_data
              ? coin?.market_data?.price_change_percentage_1y.toFixed(2)
              : null}
            %
          </div>
        </div>

        {/* social media links */}
        <div className="flex items-center justify-between p-8 text-accent md:mt-10">
          <a
            href={`https://twitter.com/${coin?.links?.twitter_screen_name}`}
            target="_blank"
            rel="noreferrer"
            className="duration-100 ease-in hover:scale-125"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href={coin?.links?.official_forum_url[0]}
            target="_blank"
            rel="noreferrer"
            className="duration-100 ease-in hover:scale-125"
          >
            <MdForum size={30} />
          </a>

          <a
            href={coin?.links?.subreddit_url}
            target="_blank"
            rel="noreferrer"
            className="duration-100 ease-in hover:scale-125"
          >
            <FaReddit size={30} />
          </a>
          <a
            href={coin?.links?.repos_url?.github[0]}
            target="_blank"
            rel="noreferrer"
            className="duration-100 ease-in hover:scale-125"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCoinInfo;
