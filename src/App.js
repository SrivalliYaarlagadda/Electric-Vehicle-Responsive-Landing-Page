// App.js
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission/Mission';
import Models from './components/Models/Models';  // import the Models component
import FindDealer from "./components/FindDealer/FindDealer";
import Footer from "./components/Footer/Footer";
import Careers from "./components/Careers/Careers"; // ⬅️ Import Careers section

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Mission />
      <Models/>
      <FindDealer />
      <Careers /> 
      <Footer/>{/* ⬅️ Careers section here */}
    </div>
  );
}

export default App;
