const url =
  "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

export const fetchCoinsIdApi = async () => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Something went wrong when connecting to the server, please wait a moment...",
    );
  }

  return data;
};
