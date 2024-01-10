import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

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
    const newData = [...data, input];
    setData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  return (
    <div className="container">
      <h2 className="text-center col-lg-6 my-4">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={getInput}
            placeholder="Enter username"
          />
        </Form.Group>

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
        Already have an account? <span>LogIn</span>
      </p>
    </div>
  );
}

export default SignUp;
