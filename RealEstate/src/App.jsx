import Header from "./Conponants/Header/Header";
import Hero from "./Conponants/Hero/Hero";
import "./App.css";
import Companies from "./Conponants/companies/Companies";
import Properties from "./Conponants/Properties/Properties";
import Price from "./Conponants/Price/Price";
import Contact from "./Conponants/Contact/Contact";
import Explore from "./Conponants/Explore/Explore";
import Footer from "./Conponants/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Properties />
        <Price />
        <Contact />
        <Explore />
        <Footer/>
        <>
</>
      </div>
    </>
  );
}

export default App;
