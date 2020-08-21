import styled from "styled-components";

export const ImgContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "60")}vw;
  height: ${(props) => (props.height ? props.height : "50")}vw;

  border: 3px gray solid;
  position: relative;
  margin: auto;

  overflow: hidden hidden;
  & > img {
    width: ${(props) => (props.overscan ? props.overscan + 100 : "100")}%;
    height: ${(props) => (props.overscan ? props.overscan + 100 : "100")}%;
    object-fit: cover;
    margin: auto;
    text-align: center;
    display: block;
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
  }
`;
