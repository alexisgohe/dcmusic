import "./App.css";

import Header from "./Components/Header";
import Banner from "./Components/Banner";
import { BrowserRouter } from "react-router-dom";
import { TitleCategory } from "./Components/TitleCategory";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Banner />
        <Carousel/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
