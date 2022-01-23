import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
