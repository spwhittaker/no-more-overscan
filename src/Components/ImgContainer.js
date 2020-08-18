import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 35rem;
  height: 30rem;
  border: 5px blue solid;
  position: relative;
  margin: auto;

  & > img {
    width: 100%;
    height: 100%;
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

export const OverscanImgContainer = styled(ImgContainer)`
  object-fit: none;
  
 overflow: hidden hidden;
  & > img {
   
    width: 125%;
    height: 125%;
    
`;
