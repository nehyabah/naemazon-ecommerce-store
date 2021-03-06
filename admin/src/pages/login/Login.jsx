import { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../../redux/context/userContext";
import styled from "styled-components";
import image from './random/imag2.jpg'
import { Link, BrowserRouter,
  Router,
  Route,
  useRouteMatch,
  useNavigate,
  Navigate
 } from "react-router-dom";
import axios from "axios";
// import { Router } from "express";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:5001/api/login", { username, password });
      Router.push("/admin")
    } catch (err) {
      setError(true)
    }
  }

  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} >LOGIN</Button>
          {error && <Error>Wrong credentials. Try again.</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-position: cover; */
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */

  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${image});
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: rgba(246, 238, 226, 0.2);
  border-radius: 10px;
  
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: rgba(246, 238, 226, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
  &:hover {
    background-color: white;
  }
`;

// const Links = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const Error = styled.span`
color: red;
font-size: 13;
`

export default Login;


