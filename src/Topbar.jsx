import { useState } from "react";
import Home1 from "./Home1";
import Authors from "./Authors";
import Contact from "./Contact";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Home1 darkMode={darkMode} />
            {/* If LatestCollections supports darkMode, pass it down: */}
            {/* <LatestCollections darkMode={darkMode} /> */}
          </>
        );

      case "authors":
        return <Authors darkMode={darkMode} />;

      case "contact":
        return <Contact darkMode={darkMode} />;

      default:
        return <Home1 darkMode={darkMode} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#060606] text-white" : "bg-white text-[#222232]"
      }`}
    >
      <Topbar darkMode={darkMode} />

      <Navbar
        onNavigate={navigate}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>{renderPage()}</main>
    </div>
  );
};

export default App;