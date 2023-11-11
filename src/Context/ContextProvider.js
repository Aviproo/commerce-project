import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [openCart, setOpenCart] = useState();
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);

  const tokenHandeler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const openCartHandeler = () => {
    setOpenCart(!openCart);
  };

  const addItems = (item) => {
    if (item.id == data.items.id) {
      alert("items alyedy added");
    }
    setItems([...items, item]);
  };

  const removeItems = (id) => {
    console.log(id);
  };

  const data = {
    token: token,
    tokenHandeler: tokenHandeler,
    items: items,
    openCart: openCart,
    openCartHandeler: openCartHandeler,
    addItems: addItems,
    removeItems: removeItems,
  };
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
