import './App.css';
import Section from './components/Section';
import ComingSoon from './components/ComingSoon';
import Navbar from './components/navbar';
import ES300h from "./Pictures/ES300h.jpg"
import LC500h from "./Pictures/LC500h.jpg"
import LS500h from "./Pictures/LS500h.jpg"
import LX600 from "./Pictures/LX600.jpg"
// import navbar from './components/navbar';
// import navLogo from "./Pictures/navLogo.png"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section name="ES300h" image={ES300h} color="#000" description="Self Charging Hybrid Sedan"/>
      <Section name="LS500h" image={LS500h} color="#fff" description="Self Charging Hybrid Luxury Sedan"/>
      <Section name="LC500h" image={LC500h} color="#fff" description="Self Charging Hybrid Luxury Coupé"/>
      <ComingSoon name="LX600" image={LX600} color="#fff" description="Luxury Full-Size SUV"/>
    </div>
  );
}

export default App