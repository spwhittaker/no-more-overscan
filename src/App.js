import React from "react";
import { ImgContainer, OverscanImgContainer } from "./Components/ImgContainer";
import { MainHeading, Subheading } from "./Components/Headings";
import dogPic from "./images/dog.jpg";
function App() {
  return (
    <div className="App">
      <MainHeading>Say NO to overscan</MainHeading>
      <Subheading>Intro to Overscan</Subheading>
      <p>Here is an image:</p>
      <ImgContainer>
        <img src={dogPic} alt="a good boy" />
      </ImgContainer>
      <p>This is another image:</p>
      <OverscanImgContainer>
        <img src={dogPic} alt="a stretched good boy" />
      </OverscanImgContainer>
      <p>Which one do you think looks better? </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        If you said the second one, then the TV companies are on to something.
      </p>
      <Subheading>What is overscan, and why should you hate it?</Subheading>
      <p>
        The two images above are in the same size of box, but the second one is
        25% wider and taller. What this means is you lose all the information
        around the edges of the picture, such as this good boy's back left paw
        and his lovely right paw.
      </p>
    </div>
  );
}

export default App;
