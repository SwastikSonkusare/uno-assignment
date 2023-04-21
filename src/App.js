import React, { useState } from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Tabs from "./components/Tabs/Tabs";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "container light" : "container dark"}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Tabs theme={theme} />
      <Card theme={theme} />
    </div>
  );
};

export default App;
