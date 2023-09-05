import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import CustomButton from "../../custom/Button/button";
import styles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-white"  style={{paddingTop: "2rem", paddingBottom: "2rem", borderBlockEnd: "1px solid #AEAEAE", marginBlockEnd: "2rem"}}>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Nav.Link href="#home" className={styles.nav_text}>About</Nav.Link>
            <Nav.Link href="#link" className={styles.nav_text}>Sign Up</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#home" className={styles.nav_text}>Login</Nav.Link>
            <CustomButton>View Projects</CustomButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
