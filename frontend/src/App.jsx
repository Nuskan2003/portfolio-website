import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const { darkMode } =
    useContext(ThemeContext);

  return (
    <>
      <ScrollProgress />

      <div
        className={
          darkMode
            ? "bg-slate-950 text-white min-h-screen"
            : "bg-slate-50 text-slate-900 min-h-screen"
        }
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;