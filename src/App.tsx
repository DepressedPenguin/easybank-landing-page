import "./App.css";
import Articles from "./Components/Articles";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
