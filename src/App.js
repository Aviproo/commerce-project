import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import ContextProvider from "./Context/ContextProvider";
import ContactUs from "./Components/Pages/ContactUS";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Store" element={<Store />} />
          <Route exact path="/Contact" element={<ContactUs />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
