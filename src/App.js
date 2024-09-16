import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Explore />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
