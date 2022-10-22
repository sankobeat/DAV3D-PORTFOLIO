import styled from "styled-components";
import { mobile } from "../Responsive";

export const Section = styled.section``;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({
    width: "90%",
  })}
`;
export const Title = styled.h1`
  padding-top: 2rem;
  text-transform: uppercase;
  font-size: 42px;
  color: #fff;
`;
export const ContentContainer = styled.div`
  padding: 4rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const FormContainer = styled.div`
  display: flex;
  flex: 1;
`;
export const Form = styled.form`
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 48%;
  font-family: var(--bai-font);
  padding: 1rem;
  font-size: 18px;
  color: #fff;
  background-color: #181818;
  border: none;
  margin-bottom: 1rem;
  &:focus {
    outline: var(--orange);
    border: none;
  }
  ${mobile({
    fontSize: "12px",
  })}
`;
export const MessageInput = styled.textarea`
  font-size: 28px;
  padding: 1rem;
  font-family: var(--bai-font);
  color: #fff;
  background-color: #181818;
  border: none;
  width: 100%;
  height: 350px;
  margin-bottom: 1rem;
  &:focus {
    outline: var(--orange);
    border: none;
  }
  ${mobile({
    height: "250px",
    fontSize: "20px",
  })}
`;
export const MessageContainer = styled.div``;
export const Send = styled.input`
  background-color: var(--orange);
  padding: 1rem 2rem;
  width: 100%;
  font-size: 28px;
  color: #fff;
  cursor: pointer;
  ${mobile({
    fontSize: "20px",
  })}
`;
export const SocialMedia = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  ${mobile({
    paddingTop: "2rem",
  })}
`;
export const SocialItem = styled.p`
  font-family: var(--bai-font);
  margin: 0.5rem 0;
  font-size: 28px;
  font-weight: 300;
  color: #fff;
  display: flex;
  align-items: center;
  ${mobile({
    fontSize: "18px",
  })}
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
export const SocialIconContainer = styled.div`
  display: flex;
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
