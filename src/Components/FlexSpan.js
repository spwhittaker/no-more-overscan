import styled from "styled-components";

export default styled.span`
  display: flex;

  max-width: 10in;
  justify-content: space-between;
  margin: auto;
  flex-direction: row;
  font-family: "Helvetica", sans-serif;
  > * {
    display: inline;
    color: black;
    font-weight: bold;
  }
`;
