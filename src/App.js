import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Home, Business} from "./pages";
import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  AOS.init();
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business_solutions" element={<Business />} />
      </Routes>
      <Footer />
    </div>
  );
}
