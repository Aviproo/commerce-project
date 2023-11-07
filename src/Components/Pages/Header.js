import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import Context from "../../Context/Context";

const Header = () => {
  const ctx = useContext(Context);
  const openCartHandeler = () => {
    ctx.openCartHandeler();
  };
  return (
    <>
      <div className={classes.header}>
        <div>
          <NavLink to="/Home">
            <button className={classes.headerButton}>Home</button>
          </NavLink>
          <NavLink to="/Store">
            <button className={classes.headerButton}>Store</button>
          </NavLink>
          <NavLink to="/About">
            <button className={classes.headerButton}>About</button>
          </NavLink>
          <NavLink to="/Contact">
            <button className={classes.headerButton}>Contact US</button>
          </NavLink>
        </div>
        <div className={classes.cartButton}>
          <Button onClick={openCartHandeler}>
            Cart<sup>{ctx.items.length}</sup>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Header;
