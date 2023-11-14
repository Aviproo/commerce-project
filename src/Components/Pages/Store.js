import { Button } from "react-bootstrap";
import Generics from "./Generics";
import classes from "./Header.module.css";
import Cart from "./Cart";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../Context/Context";
import axios from "axios";

const Store = () => {
  const ctx = useContext(Context);

  const productsArr = [
    {
      id: 1,

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const showItems = productsArr.map((item) => {
    const addTocart = () => {
      const cartItemsList = {
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
      };
      ctx.addItems(cartItemsList);
    };
    return (
      <div className={classes.showItem_map_div} key={item.id}>
        <h4 className={classes.title}>{item.title}</h4>

        <NavLink to={`/Store/${item.id}`}>
          <img src={item.imageUrl} />
        </NavLink>

        <div className={classes.priceAndCartAdd}>
          <h2>₹{item.price}</h2>
          <Button onClick={addTocart}>ADD TO CART</Button>
        </div>
      </div>
    );
  });

  return (
    <>
      {ctx.openCart && <Cart />}
      <Generics />
      <div className={classes.music}> Music</div>
      <div className={classes.showItem}>{showItems}</div>
    </>
  );
};
export default Store;
