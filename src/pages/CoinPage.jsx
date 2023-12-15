import { useEffect, useState } from "react";
import { fetchCoinsIdApi } from "../services/api/fetchCoinsIdApi";
import DOMPurify from "dompurify";
import { HiHome } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import SingleCoinInfo from "../components/SingleCoinInfo";
import { useParams } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";
import Loader from "../components/loader/Loader";

const CoinPage = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const fetchCoinsId = async () => {
    try {
      const coinsIdData = await fetchCoinsIdApi(params.coinId);
      setCoin(coinsIdData);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1150);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCoinsId();
    };
    fetchData();
  }, []);

  // ===================== description shorter =====================
  function truncateDescription(description, maxLength, homepageLink) {
    if (description.length > maxLength) {
      // Find the last space before the specified character limit
      const lastSpaceIndex = description.lastIndexOf(" ", maxLength);

      // Truncate the description and add "..." and "Learn more" link
      const truncatedText = description.slice(0, lastSpaceIndex) + "...";
      const learnMoreLink = `<a class="font-bold underline" href="${homepageLink}">(Learn more)</a>`;

      return truncatedText + " " + learnMoreLink;
    }
    return description;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="rounded-div my-12 py-8">
            <div className=" grid items-center gap-12 py-6 md:grid-cols-2">
              <div className="flex items-center py-8">
                <img
                  className="mr-8 w-[10rem] rounded-full border"
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
                    className="flex items-center rounded border px-3 py-1 duration-75 ease-in hover:border-main hover:bg-button hover:text-main"
                    href={coin?.links?.homepage[0]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HiHome className="mr-2" size={18} />
                    Homepage
                  </a>
                  <a
                    className="flex items-center rounded border px-3 py-1 duration-75 ease-in hover:border-main hover:bg-button hover:text-main"
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
              <p className="mb-4 flex items-center text-2xl font-bold text-accent">
                <IoInformationCircleOutline size={35} className="mr-1" />
                About {coin?.name}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    coin?.description && coin?.description.en
                      ? DOMPurify.sanitize(
                          truncateDescription(
                            coin?.description.en,
                            400,
                            coin?.links?.homepage[0],
                          ),
                        )
                      : "(404 Not Found)",
                }}
                className="leading-relaxed"
              ></p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CoinPage;
