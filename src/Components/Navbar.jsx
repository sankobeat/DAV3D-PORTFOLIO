import React from "react";
import {
  Nav,
  Container,
  Left,
  Logo,
  Center,
  Right,
  List,
  ListItem,
  Link,
} from "../Styles/NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Left>
          <Link>
            <Logo>DAV3D</Logo>
          </Link>
        </Left>
        <Center>
          <List>
            <ListItem>
              <Link href="#home">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#work">My Work</Link>
            </ListItem>
            <ListItem>
              <Link href="#about">About</Link>
            </ListItem>
          </List>
        </Center>
        <Right>
          <Link href="#contact">Contact</Link>
        </Right>
      </Container>
    </Nav>
  );
};

export default Navbar;
