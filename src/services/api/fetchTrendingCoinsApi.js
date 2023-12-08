const url = "https://api.coingecko.com/api/v3/search/trending";

export const fetchTrendingCoinsApi = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const { coins } = data;
  if (!res.ok) {
    throw new Error(
      "Something went wrong with connecting to the server. Please wait a moment...",
    );
  }

  return coins;
};
