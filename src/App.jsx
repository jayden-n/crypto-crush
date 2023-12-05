import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
