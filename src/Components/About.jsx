import React from "react";
import {
  Section,
  Container,
  Title,
  Content,
  Center,
  CenterContent,
} from "../Styles/AboutStyles";

const About = () => {
  return (
    <>
      <Section id="about">
        <Container>
          <Title>ABOUT ME</Title>
          <Content>
            <Center>
              <CenterContent>
                I'm a freelance 3D designer, this was my profession since the
                begining, studied and built knowledge through the journey from
                many reliable sources. my main concentration goes on modeling
                and recreating shapes of all forms either it was a product or an
                architectual visulation with high definition and deep attention
                to the details of the model as a main goal. I chosed this
                profession by heart since I fell in love with shapes and the art
                behind making what you see in a 3D formats
              </CenterContent>
            </Center>
          </Content>
        </Container>
      </Section>
    </>
  );
};

export default About;
