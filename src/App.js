import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import ContactUs from "./Components/Pages/ContactUS";
import Detail_1 from "./Components/DetailPages/Detail_1";
import Auth from "./Components/AuthPage/Auth";
import { useContext, useEffect } from "react";
import Context from "./Context/Context";
import axios from "axios";

function App() {
  const ctx = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const local = localStorage.getItem("emailId");

    if (local) {
      navigate("/store");
      ctx.emailIdHandeler(local);
      let crudId = "";
      for (let i = 0; i < local.length; i++) {
        if (local[i] == "@" || local[i] == ".") {
          continue;
        }
        crudId += local[i];
      }
      ctx.showHandler(crudId);
      const fetchItems = async () => {
        try {
          const crudData = await axios.get(
            `https://crudcrud.com/api/8da03c2aee2340b5a3e5be19d2ec503c/${crudId}`
          );
          ctx.initialFetch(crudData.data);
        } catch (error) {
          console.error("Error posting data:", error);
        }
      };
      fetchItems();
    }
  }, []);

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
