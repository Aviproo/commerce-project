import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import ContextProvider from "./Context/ContextProvider";
import ContactUs from "./Components/Pages/ContactUS";
import Detail_1 from "./Components/DetailPages/Detail_1";
import Auth from "./Components/AuthPage/Auth";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Store />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Store/:Details" element={<Detail_1 />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/Store" />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
