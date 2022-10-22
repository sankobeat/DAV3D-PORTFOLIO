import styled from "styled-components";
import { mobile } from "../Responsive";
import image from "../assets/hero.jpeg";

export const Landing = styled.section`
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5)
    ),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  ${mobile({
    width: "90%",
  })}
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 90px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 2rem;
  ${mobile({
    fontSize: "28px",
    marginBottom: "1rem",
  })}
`;

export const Paragraph = styled.p`
  font-family: var(--bai-font);
  line-height: 2;
  font-size: 22px;
  color: #fff;
  margin-bottom: 2rem;
  ${mobile({
    fontSize: "16px",
    marginBottom: "1rem",
  })}
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  background-color: var(--orange);
  color: white;
  padding: 1.5rem 3rem;
  font-size: 22px;
  ${mobile({
    fontSize: "28px",
    marginBottom: "1rem",
    padding: "0.75rem 1.5rem",
  })}
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;
