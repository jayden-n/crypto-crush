/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { fetchCoinsIdApi } from "../services/api/fetchCoinsIdApi";
import DOMPurify from "dompurify";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Link, useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../utils/firebase";
import { arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";

import SingleCoinInfo from "../components/SingleCoinInfo";
import NotFoundLoader from "../components/loader/NotFoundLoader";

const CoinPage = () => {
  const [coin, setCoin] = useState([]);
  const [infoLoading, setInfoLoading] = useState(true);
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();
  const params = useParams();

  // Memoize fetchCoinsId
  const fetchCoinsId = useCallback(async () => {
    try {
      const coinsIdData = await fetchCoinsIdApi(params.coinId);
      setCoin(coinsIdData);

      // Check if the current coin is already saved by the user
      if (user?.email && user?.watchList) {
        const isSaved = user.watchList.some(
          (saved) => saved.id === coinsIdData.id,
        );
        setSavedCoin(isSaved);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setInfoLoading(false);
      }, 700);
    }
  }, [params.coinId, user]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCoinsId();
    };
    fetchData();
  }, [fetchCoinsId]);

  // Save coin to watchlist logic
  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      // Check if the coin is already saved
      const docSnap = await getDoc(coinPath);
      const watchList = docSnap.data()?.watchList || [];
      const isSaved = watchList.some((saved) => saved.id === coin.id);

      if (!isSaved) {
        setSavedCoin(true);
        await updateDoc(coinPath, {
          watchList: arrayUnion({
            id: coin?.id,
            name: coin?.name,
            image: coin?.image.large,
            rank: coin?.market_cap_rank,
            symbol: coin?.symbol,
          }),
        });
      } else {
        alert("Coin is already in your watchlist!");
      }
    } else {
      alert("Please sign in to save a coin to your watchlist! :)");
    }
  };

  // Description shorter function
  function truncateDescription(description, maxLength, homepageLink) {
    if (description.length > maxLength) {
      const lastSpaceIndex = description.lastIndexOf(" ", maxLength);
      const truncatedText = description.slice(0, lastSpaceIndex) + "...";
      const learnMoreLink = `<a class="font-bold underline" href="${homepageLink}" target="_blank" rel="noreferrer">(Learn more)</a>`;
      return truncatedText + " " + learnMoreLink;
    }
    return description;
  }

  return (
    <>
      {coin && Object.keys(coin).length > 0 ? (
        <div className="rounded-div my-12 py-8">
          <div className="grid items-center gap-12 py-6 md:grid-cols-2">
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
                <button
                  onClick={saveCoin}
                  className={`
                    flex items-center rounded border px-3 py-1 duration-75 ease-in
                    ${
                      savedCoin
                        ? "border-main bg-button text-main"
                        : "hover:border-main hover:bg-button hover:text-main"
                    }
                  `}
                  disabled={savedCoin}
                >
                  {savedCoin ? (
                    <AiFillStar className="mr-2" size={18} />
                  ) : (
                    <AiOutlineStar className="mr-2" size={18} />
                  )}
                  {savedCoin ? "Saved" : "Add to watchlist"}
                </button>
                <Link
                  to={coin?.links?.blockchain_site[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center rounded border px-3 py-1 duration-75 ease-in hover:border-main hover:bg-button hover:text-main"
                >
                  <IoIosLink className="mr-2" size={18} />
                  Blockchain
                </Link>
              </div>
            </div>
          </div>

          {/* SingleCoinInfo with loader */}
          {infoLoading ? (
            <NotFoundLoader />
          ) : (
            <>
              <SingleCoinInfo coin={coin} />
              {/* Description with loader */}
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
            </>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            <NotFoundLoader />
          </h1>
          <p className="mb-12 mt-6 text-xl leading-7 text-accent">
            Due to using a free API, the data is limited to 10-30 calls/minute.
            Please try again later.
          </p>
        </div>
      )}
    </>
  );
};

export default CoinPage;
