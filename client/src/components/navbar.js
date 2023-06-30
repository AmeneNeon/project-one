import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Navbar1() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Recipe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create-recipe">Create Recipe</Nav.Link>
            <Nav.Link href="/saved-recipe">saved Recipes</Nav.Link>
            {!cookies.access_token ? (
              <Nav.Link href="/auth">Login/Register</Nav.Link>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
