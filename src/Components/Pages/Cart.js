import { Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { useContext } from "react";
import Context from "../../Context/Context";
const Cart = () => {
  const ctx = useContext(Context);

  const openCartHandeler = () => {
    ctx.openCartHandeler();
  };

  const placeOrder = () => {
    ctx.placeOrder();
  };
  let total = 0;

  const showCartItems = ctx.items.map((items, i) => {
    const removeHandeler = () => {
      ctx.removeItems(i);
    };
    total += items.price;
    return (
      <div key={items.i}>
        <img src={items.imageUrl} className={classes.cartImage} />
        <span className={classes.cartItemsTitle}>{items.title}</span>
        <span className={classes.cartItemsPrice}>{items.price}</span>
        {/* <input >{items.number}/</input>> */}
        <span className={classes.cartItemsInput}>x{items.number}</span>
        <Button
          variant="danger"
          className={classes.cartItemButton}
          onClick={removeHandeler}
        >
          REMOVE
        </Button>
      </div>
    );
  });
  return (
    <>
      <div className={classes.cart}>
        <Button
          className={classes.closeButton}
          variant="danger"
          onClick={openCartHandeler}
        >
          X
        </Button>
        <div className={classes.cartWord}>Cart</div>
        <div className={classes.cartHeader}>
          <span className={classes.cartItem}>ITEM</span>
          <span className={classes.cartPrice}>PRICE</span>
          <span className={classes.cartQuantity}>QUANTITY</span>
        </div>
        <div>
          {showCartItems}
          <div>
            <div>
              <h2>Total Amount:₹{total} </h2>
              <Button onClick={placeOrder}> Place order</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
