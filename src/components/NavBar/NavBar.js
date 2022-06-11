import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
import auth from "../../Firebase/Firebase.init";
import { MdLightMode } from "react-icons/md";

const NavBar = () => {
  // const [theme, setTheme] = useState("light-theme");
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  // const toogleTheme = () => {
  //   if (theme === "dark-theme") {
  //     setTheme("light-theme");
  //   } else {
  //     setTheme("dark-theme");
  //   }
  // };
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Rifat's Gadget
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/upload-products">
                Upload Products
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                Order
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>

              {user ? (
                <div>
                  <span className="text-white">{user?.email}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => signOut(auth)}
                  >
                    SignOut
                  </button>
                </div>
              ) : (
                user
              )}

              <DarkMode></DarkMode>

              {/* <Link to onClick={() => toogleTheme()}>
                <MdLightMode className="text-white"></MdLightMode>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
