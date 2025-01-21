import "./App.css";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Support from "./component/Support";
import WhyPuspur from "./component/WhyPuspur";
import Logos from "./component/logos";
import Hero from "./component/hero";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
      <Features />
      <WhyPuspur />
      <Support />
      <Footer />
    </>
  );
}

export default App;
