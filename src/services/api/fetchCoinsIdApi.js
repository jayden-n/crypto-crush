export const fetchCoinsIdApi = async (coinId) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Something went wrong when connecting to the server, please wait a moment...",
    );
  }

  return data;
};
