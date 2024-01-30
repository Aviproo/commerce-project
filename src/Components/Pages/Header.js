import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import Context from "../../Context/Context";

const Header = () => {
  const navigate = useNavigate();
  const ctx = useContext(Context);
  const openCartHandeler = () => {
    ctx.openCartHandeler();
  };

  const logoutHandeler = () => {
    const localdata = localStorage.getItem("emailId");
    console.log(localdata);
    localStorage.removeItem("emailId");
    ctx.updateFirst();
    navigate("/");
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
          <NavLink to="/Auth">
            <button className={classes.headerButton}>Auth</button>
          </NavLink>
        </div>
        <div className={classes.cartButton}>
          <Button
            variant="danger"
            className={classes.logout}
            onClick={logoutHandeler}
          >
            logout
          </Button>
          <Button onClick={openCartHandeler}>
            Cart<sup>{ctx.items.length}</sup>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Header;
