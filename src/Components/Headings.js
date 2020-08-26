import styled from "styled-components";

export const MainHeading = styled.h1`
  font-size: 3em;
  font-family: "Fira Sans";
  font-weight: 600;
  text-align: center;
  color: #b4656f;
  min-height: 10rem;
  padding: 1rem auto;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: 0;
  margin-bottom: 0;

  display: flex;
  -webkit-text-stroke: 2px white;
  justify-content: center;
  align-items: center;
  background: rgb(4, 255, 185);
  background: linear-gradient(
    97deg,
    rgba(4, 255, 185, 1) 0%,
    rgba(20, 149, 175, 1) 100%
  );
`;
export const Subheading = styled.h2`
  color: white;
  padding: auto;
  width: 100vw;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: calc(50% - 50vw);
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  background: #f332c7;
  padding: 1rem;
  text-decoration: underline;
`;
