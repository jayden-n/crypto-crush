import { useContext, useEffect, useState } from "react";
import { fetchCoinsIdApi } from "../services/api/fetchCoinsIdApi";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { ThemeContext } from "../context/ThemeContext";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";

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
    <div>
      <div>
        <img src={coin?.image?.large} alt="" />
        <div>
          <p>{coin?.name} price</p>
          <p>({coin?.symbol?.toUpperCase()} / CAD)</p>
        </div>
      </div>

      <div>
        <div>
          <div>
            {coin?.market_data?.current_price ? (
              <p>
                C$
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
          <div>
            <div>
              {/* market cap */}
              <p>Market Cap</p>
              {coin?.market_data?.market_cap ? (
                <p>C${coin?.market_data?.market_cap.cad.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              {/* 24h volume */}
              <p>Volume (24h)</p>
              {coin?.market_data?.market_cap ? (
                <p>C${coin?.market_data?.total_volume.cad.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          <div>
            <div>
              <p> 24h High</p>
              {coin?.market_data?.high_24h ? (
                <p>C${coin?.market_data?.high_24h.cad.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p> 24h Low</p>
              {coin?.market_data?.low_24h ? (
                <p>C${coin?.market_data?.low_24h.cad.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p>Market Stats</p>
          <div>
            <div>
              <p>Market Rank</p>
              {coin?.market_cap_rank}
            </div>
            <div>
              <p>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p>Trust Score</p>
              {coin?.tickers ? <p>{coin?.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div>
            <div>
              <p>Price Change (24h)</p>
              {coin?.market_data
                ? coin?.market_data?.price_change_percentage_24h.toFixed(2)
                : null}
              %
            </div>
            <div>
              <p>Price Change (7d)</p>
              {coin?.market_data
                ? coin?.market_data?.price_change_percentage_7d.toFixed(2)
                : null}
              %
            </div>
            <div>
              <p>Price Change (14d)</p>
              {coin?.market_data
                ? coin?.market_data?.price_change_percentage_14d.toFixed(2)
                : null}
              %
            </div>
          </div>

          <div>
            <div>
              <p>Price Change (30d)</p>
              {coin?.market_data
                ? coin?.market_data?.price_change_percentage_30d.toFixed(2)
                : null}
              %
            </div>
            <div>
              <p>Price Change (60d)</p>
              {coin?.market_data
                ? coin?.market_data?.price_change_percentage_60d.toFixed(2)
                : null}
              %
            </div>
            <div>
              <p>Price Change (1y)</p>
              {coin?.market_data
                ? coin?.market_data?.price_change_percentage_1y.toFixed(2)
                : null}
              %
            </div>
          </div>

          <div>
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p>About {coin?.name}</p>
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
