import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("dark mode enabled", "success");
      document.title = "TextUils-DarkMode";
      setInterval(() => {
        document.title = "textUtil is amazing";
      }, 2000);

      setInterval(() => {
        document.title = "install textUtil now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode ha been enabled", "success");
      document.title = "TextUils-LightMode";
    }
  };

  return (
    <>
      <Navbar title="text-utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;

////////////////////is required jb lgega jb prop ma title enter  krna hoga
// wrna error dega
