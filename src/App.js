import Footer from "./component/Footer";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import MainContent from "./component/Main";


function App() {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>

  );
}

export default App;