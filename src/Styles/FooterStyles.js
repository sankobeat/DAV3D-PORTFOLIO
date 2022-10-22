import styled from "styled-components";

import { mobile } from "../Responsive";

import footerImg from "../assets/footer.png";

export const FooterSection = styled.footer`
  background-image: url(${footerImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding: 6rem 0;
  ${mobile({
    width: "90%",
    flexWrap: "wrap",
  })}
`;
export const Left = styled.div`
  flex: 1;
`;

export const Desc = styled.p`
  font-size: 16px;
  color: #fff;
  padding: 1rem 0;
  ${mobile({
    fontSize: "12px",
  })}
`;
export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 20px;
  color: var(--orange);
  text-transform: uppercase;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  margin: 0.5rem 0;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--orange);
  }
`;

export const Right = styled.div`
  flex: 1;
  text-align: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactText = styled.p`
  font-family: var(--bai-font);
  margin: 1rem 0;
  font-size: 20px;
  color: #fff;
`;

export const SocialIcon = styled.span`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-size: 40px;
  ${mobile({
    fontSize: "28px",
  })}
`;
export const SocialLink = styled.a`
  padding: 0.75rem;
  color: #fff;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--orange);
    transform: scale(1.2);
  }
`;
