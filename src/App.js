import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import ContactUs from "./Components/Pages/ContactUS";
import Detail_1 from "./Components/DetailPages/Detail_1";
import Auth from "./Components/AuthPage/Auth";
import { useContext } from "react";
import Context from "./Context/Context";

function App() {
  const ctx = useContext(Context);

  return (
    <div className="App">
      {ctx.show && <Header />}
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Store/:Details" element={<Detail_1 />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/Auth" />} />
      </Routes>
    </div>
  );
}

export default App;
