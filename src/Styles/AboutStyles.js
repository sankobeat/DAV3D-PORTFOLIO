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

export const Content = styled.div`
  padding: 2rem 0;
`;

// const Left = styled.div`
//   flex: 1;
// `;
// const Right = styled.div`
//   flex: 1;
// `;
export const Center = styled.div`
  flex: 1;
`;
export const CenterContent = styled.p`
  padding: 0 2rem;
  color: #fff;
  font-family: var(--bai-font);
  font-size: 20px;
  ${mobile({
    padding: "0 1rem",
  })}
`;
