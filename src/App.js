import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <NewProducts />
      <Contact />
    </div>
  );
}

export default App;
