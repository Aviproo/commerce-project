import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const ctx = useContext(Context);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogIn, setIsLogin] = useState(true);

  const loginHandeler = () => {
    setIsLogin(!isLogIn);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let url;
    if (isLogIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("authentication Successfull");
          ctx.tokenHandeler(data.idToken);
          navigate("/");
        });
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };
  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={submitHandler}>
        <div>
          Email:
          <input ref={emailRef} />
        </div>
        <br />
        <div>
          Password:
          <input ref={passwordRef} />
        </div>
        <br />
        <Button type="submit">{isLogIn ? "LogIn" : "SignIn"}</Button>
        <Button onClick={loginHandeler} style={{ marginLeft: "10px" }}>
          {isLogIn ? "New User" : "Existing"}
        </Button>
      </form>
    </div>
  );
};
export default Auth;
