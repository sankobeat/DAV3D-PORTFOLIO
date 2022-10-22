import React from "react";
import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import {
  FooterSection,
  Container,
  Left,
  Desc,
  Title,
  Center,
  LinksContainer,
  Link,
  Right,
  SocialContainer,
  ContactText,
  SocialIcon,
  SocialLink,
} from "../Styles/FooterStyles";
const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Left>
          <Title>DAV3D</Title>
          <Desc>
            Daoud is a 3D Designer and artist from north africa. this is the
            offical page for Daoud, if you like any of his work feel free to
            contact him for personal work. Daoud is freelancing so he's
            available for any job or collaboration
          </Desc>
        </Left>
        <Center>
          <Title>Section</Title>
          <LinksContainer>
            <Link href="#home">HOME</Link>
            <Link href="#work">WORK</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#contact">CONTACT</Link>
          </LinksContainer>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactText>dunosixen@gmail.com</ContactText>
          <ContactText>+213 669 441 930</ContactText>
          <SocialContainer>
            <SocialLink href="https://www.behance.net/DAV3D" target="_blank">
              <SocialIcon>
                <AiOutlineBehance />
              </SocialIcon>
            </SocialLink>
            <SocialLink
              href="https://www.artstation.com/ferhatdaoud"
              target="_blank"
            >
              <SocialIcon>
                <FaArtstation />
              </SocialIcon>
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/n__oway/"
              target="_blank"
            >
              <SocialIcon>
                <AiOutlineInstagram />
              </SocialIcon>
            </SocialLink>
          </SocialContainer>
        </Right>
      </Container>
    </FooterSection>
  );
};

export default Footer;
