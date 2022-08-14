import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const elEmail = useRef();
  const elPassword = useRef();
  const navigate = useNavigate();
  const handleForm = (evt) => {
    evt.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: elEmail.current.value,
        password: elPassword.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.localStorage.setItem("token", data.token);
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login container">
      <form onSubmit={handleForm} className="login-form">
        <h1>Login</h1>
        <input ref={elEmail} type="text" placeholder="Email" />
        <input ref={elPassword} type="password" placeholder="Password" />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
