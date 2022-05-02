import { Banner } from "./Components/Landing Page/Banner";
import { BottomFooter } from "./Components/Landing Page/Footer/BottomFooter";
import { GrandOpeningOffers } from "./Components/Landing Page/GrandOpeningOffers";
import { Navbar } from "./Components/Landing Page/Navbar/Navbar";
import { TheyAreJustThatGood } from "./Components/Landing Page/TheyAreJustThatGood";
import { TopBrands } from "./Components/Landing Page/TopBrands";

;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <GrandOpeningOffers/>
      <TheyAreJustThatGood/>
      <TopBrands/>
      <BottomFooter/>
    </div>
  );
}

export default App;
