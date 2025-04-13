import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Support from "./Pages/Support/Support";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";
import MoviesShows from "./Pages/MoviesShows/moviesShows";
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="bg-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/" element={<MoviesShows />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
