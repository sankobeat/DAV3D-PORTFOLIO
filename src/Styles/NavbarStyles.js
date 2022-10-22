import styled from "styled-components";
import { mobile } from "../Responsive";

export const Nav = styled.nav`
  background-color: #000;
  height: 75px;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "0.5rem",
  })}
`;

//left styles
export const Left = styled.div`
  flex: 1; ;
`;
export const Logo = styled.h1`
  flex: 1;
  font-size: 28px;
  color: var(--orange);
  ${mobile({
    fontSize: "14px",
  })}
`;

//center styles
export const Center = styled.div`
  flex: 1;

  ${mobile({
    flex: "2",
    fontSize: "12px",
  })}
`;
export const List = styled.ul`
  flex: 1;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ListItem = styled.li``;
export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;
//right styles
export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  text-transform: uppercase;
  color: #fff;
  ${mobile({
    fontSize: "14px",
  })}
`;
