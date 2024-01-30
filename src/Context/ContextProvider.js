import { useState } from "react";
import Context from "./Context";
import axios from "axios";

const ContextProvider = (props) => {
  const local = localStorage.getItem("emailId");
  const [openCart, setOpenCart] = useState();
  const [items, setItems] = useState([]);
  const [emailId, setEmailId] = useState(local);
  const [show, setShow] = useState(false);
  const [crud, setCrud] = useState("");

  const crudLink = "2f694ed0136142d1afc299592d3a0af4";

  const placeOrder = () => {
    if (data.items.length == 0) {
      alert("Nothing in your Cart");
    } else {
      alert("Order Placed, Thanks for ordering");
      setItems([]);
    }
  };

  const emailIdHandeler = (emailId) => {
    setEmailId(emailId);
    localStorage.setItem("emailId", emailId);
    setShow(true);
  };

  const openCartHandeler = async () => {
    setOpenCart(!openCart);
    const crudData = await axios.get(
      `https://crudcrud.com/api/${crudLink}/${data.crud}`
    );

    setItems(crudData.data);
  };

  const addItems = async (item) => {
    try {
      const response = await axios.post(
        `https://crudcrud.com/api/${crudLink}/${data.crud}`,
        item
      );

      const crudData = await axios.get(
        `https://crudcrud.com/api/${crudLink}/${data.crud}`
      );

      setItems(crudData.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const showHandler = (crudId) => {
    setCrud(crudId);
  };

  const removeItems = async (id) => {
    try {
      const response = await axios.get(
        `https://crudcrud.com/api/${crudLink}/${data.crud}`
      );
      let id = await response.data[0]._id;

      const dlt = await axios.delete(
        `https://crudcrud.com/api/${crudLink}/${data.crud}/${id}`
      );

      const crudData = await axios.get(
        `https://crudcrud.com/api/${crudLink}/${data.crud}`
      );

      setItems(crudData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initialFetch = (initial) => {
    setItems(initial);
  };

  const updateFirst = () => {
    setShow(false);
  };

  const data = {
    crud: crud,
    show: show,
    showHandler: showHandler,
    emailId: emailId,
    emailIdHandeler: emailIdHandeler,
    items: items,
    openCart: openCart,
    openCartHandeler: openCartHandeler,
    addItems: addItems,
    removeItems: removeItems,
    placeOrder: placeOrder,
    initialFetch: initialFetch,
    updateFirst: updateFirst,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
