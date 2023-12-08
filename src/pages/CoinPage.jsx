import { useContext, useEffect, useState } from "react";
import { fetchCoinsIdApi } from "../services/api/fetchCoinsIdApi";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { ThemeContext } from "../context/ThemeContext";
import { FaTwitter, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { HiHome } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import { MdForum } from "react-icons/md";

const CoinPage = () => {
  const [coin, setCoin] = useState([]);
  const { theme } = useContext(ThemeContext);
  const fillColor = theme === "dark" ? "#fcba29" : "#8e44af";

  const fetchCoinsId = async () => {
    try {
      const coinsIdData = await fetchCoinsIdApi();

      setCoin(coinsIdData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoinsId();
  }, []);

  return (
    <div className="rounded-div my-12 py-8">
      <div className=" grid items-center gap-12 py-6 md:grid-cols-2">
        <div className="flex items-center py-8">
          <img
            className="mr-8 w-[10rem]"
            src={coin?.image?.large}
            alt={coin?.name}
          />
          <div>
            <p className="text-3xl font-bold">{coin?.name} </p>
            <p>({coin?.symbol?.toUpperCase()} / CAD)</p>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <div className="flex items-center gap-4 text-lg md:float-right">
            <a
              className="hover:text-main hover:border-main flex items-center rounded border px-3 py-1 duration-75 ease-in hover:bg-button"
              href={coin?.links?.homepage[0]}
              target="_blank"
              rel="noreferrer"
            >
              <HiHome className="mr-2" size={18} />
              Homepage
            </a>
            <a
              className="hover:text-main hover:border-main flex items-center rounded border px-3 py-1 duration-75 ease-in hover:bg-button"
              href={coin?.links?.blockchain_site[0]}
              target="_blank"
              rel="noreferrer"
            >
              <IoIosLink className="mr-2" size={18} />
              Blockchain
            </a>
          </div>
        </div>
      </div>

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
            >
              <FaTwitter size={30} />
            </a>
            <a
              href={coin?.links?.official_forum_url[0]}
              target="_blank"
              rel="noreferrer"
            >
              <MdForum size={30} />
            </a>

            <a
              href={coin?.links?.subreddit_url}
              target="_blank"
              rel="noreferrer"
            >
              <FaReddit size={30} />
            </a>
            <a
              href={coin?.links?.repos_url?.github[0]}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="py-4">
        <p className="mb-2 text-2xl font-bold">About {coin?.name}</p>
        {/* set to normal looking paragraph from html code*/}
        {/* DOMPurify */}
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin?.description ? coin?.description.en : "",
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
