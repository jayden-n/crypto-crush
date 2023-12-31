import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import AccountPage from "./pages/AccountPage";
import { useEffect, useState } from "react";
import { fetchCoinsApi } from "./services/api/fetchCoinsApi";
import CoinPage from "./pages/CoinPage";
import Footer from "./components/Footer";
import Loader from "./components/loader/Loader";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoins = async () => {
    setIsLoading(true);
    try {
      // split into smaller components
      const fetchCoinsData = await fetchCoinsApi();
      setCoins(fetchCoinsData);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching coins: ", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex min-h-screen flex-col">
              <NavBar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage coins={coins} />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/coin/:coinId" element={<CoinPage />}>
                    <Route />
                  </Route>
                </Routes>
              </main>
              <Footer />
            </div>
          </>
        )}
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
