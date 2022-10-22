import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Section,
  Container,
  Title,
  ContentContainer,
  FormContainer,
  InputContainer,
  Input,
  MessageInput,
  MessageContainer,
  Send,
  SocialMedia,
  SocialItem,
  SocialIcon,
  SocialIconContainer,
  SocialLink,
  Form,
} from "../Styles/ContactStyles";
import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineBehance,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sw0xly2",
        "template_dysmdo4",
        form.current,
        "NQFndbPsulHuIA_N_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Title>CONTACT ME</Title>
        <ContentContainer>
          <FormContainer>
            <Form ref={form} onSubmit={sendEmail}>
              <InputContainer>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                />

                <Input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                />
              </InputContainer>
              <MessageContainer>
                <MessageInput name="message" placeholder="Your message..." />
              </MessageContainer>

              <Send type="submit" value="Send" />
            </Form>
          </FormContainer>
          <SocialMedia>
            <SocialItem>
              <SocialIcon>
                <AiOutlineMail />
              </SocialIcon>
              dunosixen@gmail.com
            </SocialItem>
            <SocialItem>
              <SocialIcon>
                <AiFillPhone />
              </SocialIcon>
              +213 669 441 930
            </SocialItem>
            <SocialIconContainer>
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
            </SocialIconContainer>
          </SocialMedia>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default Contact;
