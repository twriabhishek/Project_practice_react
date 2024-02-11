import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./Components/JsFiles/Counter";
import "./Components/Styles/Counter.scss";
import "./Components/Styles/CardProps.scss";
import CardProps from "./Components/JsFiles/Props/CardProps";
import ChangeColor from "./Components/JsFiles/ChangeColor";
import "./Components/Styles/Changecolor.scss";
import RightSide from "./Components/JsFiles/Navbar/RightSide.js";
import "./Components/Styles/Navbar.scss";
import PasswordGenerator from "./Components/JsFiles/PasswordGenerator.js";
import './Components/Styles/PasswordGenerator.scss'
import CurrencyConvertor from "./Components/JsFiles/CurrencyConvertor.js";
import "./Components/Styles/CurrencyConvertor.scss"
import Testscss from "./Components/JsFiles/testscss.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RightSide />}>
            <Route path="counter" element={<Counter />} />
            <Route path="cardProps" element={<CardProps />} />
            <Route path="changeColor" element={<ChangeColor />} />
            <Route path="pass_generator" element={<PasswordGenerator />} />
            <Route path="currency_convertor" element={<CurrencyConvertor/>} />
          </Route>
        </Routes>
      </Router>
      {/* <Testscss/> */}
    </>
  );
}

export default App;
