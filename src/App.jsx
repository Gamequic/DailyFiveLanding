import { Routes, Route } from 'react-router-dom';

import ReactGA from "react-ga4";

ReactGA.initialize("G-2FBB5RYTPS");
ReactGA.send("pageview");

// Pages
import MainPage from "./Pages/MainPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
    </Routes>
  );
}

export default App;
