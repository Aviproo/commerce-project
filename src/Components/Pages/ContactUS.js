import { Button } from "react-bootstrap";
import Generics from "./Generics";
import classes from "./Header.module.css";
import { useState } from "react";
const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const namehandeler = (event) => {
    setName(event.target.value);
  };
  const emailHandeler = (event) => {
    setEmail(event.target.value);
  };
  const phoneHandeler = (event) => {
    setPhone(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const inputData = {
      name: name,
      email: email,
      phone: phone,
    };
    console.log(inputData);

    fetch(
      "https://ecommerce-contact-fe22c-default-rtdb.firebaseio.com/inputData.json",
      {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log(alert("We received your data"));
        }
      })
      .catch((err) => {
        alert("Something went Wrong");
      });
  };

  return (
    <div>
      <Generics />
      <form onSubmit={submitHandeler}>
        <div className={classes.formDiv}>
          <div>
            <label>Name:</label>
            <input onChange={namehandeler} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" onChange={emailHandeler} />
          </div>

          <div>
            <label>Phone:</label>
            <input type="number" onChange={phoneHandeler} />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default ContactUs;
