import './App.css';
import Section from './components/Section';
//import ComingSoon from './components/ComingSoon';
import Navbar from './components/navbar';
import ES300h from "./Pictures/ES300h.jpg"
import RX450h from "./Pictures/RX450h.jpg";
import LC500h from "./Pictures/LC500h.jpg"
import LS500h from "./Pictures/LS500h.jpg"
import LX600 from "./Pictures/LX600.jpg"
// import navbar from './components/navbar';
// import navLogo from "./Pictures/navLogo.png"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section name="ES300h" image={ES300h} color="#000" description="Self Charging Hybrid Sedan" price="59,71,000"/>
      <Section name="LS500h" image={LS500h} color="#fff" description="Self Charging Hybrid Luxury Sedan" price="1,91,52,000"/>
      <Section name="LC500h" image={LC500h} color="#fff" description="Self Charging Hybrid Luxury Sports Coupé" price="2,23,62,000"/>
      <Section name="RX450hL" image={RX450h} color="#fff" description="Mid-Size Luxury Crossover" price="1,11,35,000"/>
      <Section name="LX500d" image={LX600} color="#fff" description="Full-Size Luxury SUV" price="2,82,40,000"/>
    </div>
  );
}

export default App