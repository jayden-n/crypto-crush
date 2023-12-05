const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=20&page=1&sparkline=true&locale=en";

export const fetchCoinsApi = async () => {
  const res = await fetch(url);
  const data = await res.json();

  // if fetch cannot reach server
  if (!res.ok) {
    throw new Error(
      "Something went wrong when connecting to the server, please wait a moment...",
    );
  }

  return data;
};
