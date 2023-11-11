import { useParams } from "react-router-dom";
import Generics from "../Pages/Generics";
import classes from "./Details.module.css";
import { Button } from "react-bootstrap";

const Detail_1 = () => {
  const params = useParams();
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

  const productDetail = productsArr[params.Details - 1];
  console.log(productDetail);
  return (
    <>
      <Generics />

      <div className={classes.mainDiv}>
        <div>
          <div>
            <img src={productDetail.imageUrl} /> <br />
            <Button className={classes.addToCartBtn}>ADD TO CART</Button>
          </div>
        </div>

        <div>
          <div>
            <h4>Title: {productDetail.title}</h4>
          </div>
          <div>Product Price : ₹{productDetail.price}</div>
        </div>
      </div>
      <div className={classes.generics}>Generics</div>
    </>
  );
};
export default Detail_1;
