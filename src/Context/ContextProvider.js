import { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";

const ContextProvider = (props) => {
  const [openCart, setOpenCart] = useState();
  const [items, setItems] = useState([]);
  const [emailId, setEmailId] = useState(null);
  const [show, setShow] = useState(false);
  const [crud, setCrud] = useState("");

  const local = localStorage.getItem("emailId");
  let crudIdLocal = "";
  for (let i = 0; i < local.length; i++) {
    if (local[i] == "@" || local[i] == ".") {
      continue;
    }
    crudIdLocal += local[i];
  }
  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const crudData = await axios.get(
  //         `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${crudIdLocal}`
  //       );
  //       setItems(crudData.data);
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //     }
  //   };
  //   fetch();
  // }, []);

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
      `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${data.crud}`
    );

    setItems(crudData.data);
  };

  const addItems = async (item) => {
    try {
      const response = await axios.post(
        `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${data.crud}`,
        item
      );

      const crudData = await axios.get(
        `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${data.crud}`
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
        `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${data.crud}`
      );
      let id = await response.data[0]._id;

      const dlt = await axios.delete(
        `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${data.crud}/${id}`
      );

      const crudData = await axios.get(
        `https://crudcrud.com/api/490cccfef7694a4bada9c1c3c48ecdf2/${data.crud}`
      );

      setItems(crudData.data);
    } catch (error) {
      console.log(error);
    }
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
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
