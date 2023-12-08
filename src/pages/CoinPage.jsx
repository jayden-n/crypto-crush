import { useEffect, useState } from "react";
import { fetchCoinsIdApi } from "../services/api/fetchCoinsIdApi";
import DOMPurify from "dompurify";
import { HiHome } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import SingleCoinInfo from "../components/SingleCoinInfo";

const CoinPage = () => {
  const [coin, setCoin] = useState([]);

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

      <SingleCoinInfo coin={coin} />

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
