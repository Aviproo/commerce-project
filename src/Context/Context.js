import { createContext } from "react";

const Context = createContext({
  crud: "",
  show: "",
  showHandler: () => {},
  emailId: "",
  emailIdHandeler: () => {},
  items: "",
  openCart: "",
  openCartHandeler: () => {},
  addItems: () => {},
  removeItems: () => {},
  placeOrder: "",
});
export default Context;
