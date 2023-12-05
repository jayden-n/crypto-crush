import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AccountPage from "./pages/AccountPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=20&page=1&sparkline=true&locale=en";
  //   //   const url = `${baseUrl}/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=20&page=1&sparkline=true&locale=en`;

  //   useEffect(() => {
  //     axios.get(url).then((res) => {
  //       setCoins(res.data);
  //       console.log(res.data);
  //     });
  //   }, [url]);

  const fetchCoins = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      // if fetch cannot reach server
      if (!res.ok) {
        throw new Error(
          "Something went wrong when connecting to the server, please wait a moment...",
        );
      }

      setCoins(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching coins: ", error.message);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [url]);

  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
