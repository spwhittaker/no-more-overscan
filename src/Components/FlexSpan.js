import styled from "styled-components";

export default styled.span`
  display: flex;
  min-width: 60vw;
  max-width: 700px;
  justify-content: space-between;
  margin: auto;
  flex-direction: row;
  font-family: "Helvetica", sans-serif;
  > * {
    display: inline;
    color: black;
    font-weight: lighter;
  }
`;
