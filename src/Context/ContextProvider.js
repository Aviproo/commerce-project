import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [openCart, setOpenCart] = useState();
  const [items, setItems] = useState([]);

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
    items: items,
    openCart: openCart,
    openCartHandeler: openCartHandeler,
    addItems: addItems,
    removeItems: removeItems,
  };
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
