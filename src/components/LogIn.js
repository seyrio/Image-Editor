import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

function LogIn() {
  const history = useNavigate();
  const initialInput = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialInput);

  const getInput = (e) => {
    const { name, value } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const submitInput = (e) => {
    e.preventDefault();
    const getUsersData = localStorage.getItem("userData");
    if (getUsersData && getUsersData.length) {
      const usersData = JSON.parse(getUsersData);
      const user = usersData.filter((element, ind) => {
        return (
          element.email === input.email && element.password === input.password
        );
      });

      if (!user || !user.length) {
        alert("Invalid details, you have been denied entry to the realm! 💀");
        document.getElementById("logInForm").reset();
      } else history("/realm");
      setInput(initialInput);
    }
  };

  const mock = (e) => {
    e.preventDefault();
    history("/realm");
  };

  return (
    <div className="container">
      <h2 className="text-center col-lg-6 my-4">Log In</h2>
      <Form id="logInForm">
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={getInput}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={getInput}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={submitInput}>
          Submit
        </Button>
      </Form>
      <p className="my-3">
        Don't have an account?{" "}
        <span>
          <NavLink to="/sign-up">SignUp</NavLink>
        </span>
      </p>
      <p className="my-3">
        Use mock credentials ~{" "}
        <a href="/" onClick={mock}>
          LogIn
        </a>
      </p>
    </div>
  );
}

export default LogIn;
