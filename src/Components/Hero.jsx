import React from "react";
import {
  Landing,
  Container,
  Content,
  Title,
  Paragraph,
  Button,
  Link,
} from "../Styles/HeroStyles";

const Hero = () => {
  return (
    <Landing id="home">
      <Container>
        <Content>
          <Title>
            Hello, I'm <br /> ferhat daoud
          </Title>
          <Paragraph>
            Welcome to the offical portfolio page <br />
            Here I'll share with you some of my work in the field <br />
            Allways open for work and collaborations !
          </Paragraph>
          <Button>
            <Link href="#work">view work</Link>
          </Button>
        </Content>
      </Container>
    </Landing>
  );
};

export default Hero;
