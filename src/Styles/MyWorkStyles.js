import styled from "styled-components";
import { mobile } from "../Responsive";
export const WorkSection = styled.section``;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;
export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.2s all ease-in-out;
`;
export const ZoomIcon = styled.span`
  color: #fff;
  font-size: 99px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  opacity: 0;
  z-index: 5;
  transition: all 0.2s ease-in-out;
`;
export const Card = styled.div`
  cursor: pointer;
  height: 350px;
  width: 375px;
  display: flex;
  justify-content: center;
  background-color: black;
  overflow: hidden;
  position: relative;
  &:hover ${CardImage} {
    opacity: 0.6;
    transform: scale(1.1);
  }
  &:hover ${ZoomIcon} {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  ${mobile({
    height: "175px",
  })}
`;

export const ImageContainer = styled.div`
  flex: 3;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.show === "open" ? 1 : 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => (props.show === "open" ? 99 : -1)};
  transition: 1s all ease-in-out;
`;

export const ModalImages = styled.img`
  transform: ${(props) =>
    props.show === "open" ? "translateY(0px)" : "translateY(100px)"};
  opacity: ${(props) => (props.show === "open" ? 1 : 0)};
  object-fit: contain;
  width: 90%;
  height: 80%;
  transition: 0.5s all ease;
  ${mobile({
    width: "90%",
    height: "40%",
  })}
`;

export const Close = styled.span`
  font-size: 38px;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  color: #fff;
  cursor: pointer;
`;
