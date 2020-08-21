import React from "react";
import { ImgContainer } from "./Components/ImgContainer";
import { MainHeading, Subheading } from "./Components/Headings";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import dogPic from "./images/dog.jpg";
import crtTv from "./images/tv-television-vintage-oldschool.jpg";
import simpsons from "./images/frc-e912be841be584ce75702492dda951e3.png";
function App() {
  return (
    <div className="App">
      <MainHeading>Say NO to overscan</MainHeading>
      <Subheading>Intro to Overscan</Subheading>
      <p>Here is an image:</p>
      <ImgContainer picSrc={dogPic} picAlt={"a good boy"}>
        <img src={dogPic} alt={"a good boy"}></img>
      </ImgContainer>
      <p>This is another image:</p>
      <ImgContainer overscan={25}>
        <img src={dogPic} alt="a stretched good boy" />
      </ImgContainer>
      <p>
        Which one do you think looks better?
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
        <br />
        If you said the second one, then the TV companies are on to something.
      </p>
      <Subheading>What is overscan, and why should you hate it?</Subheading>
      <p>
        The two images above are in the same size of box, but the second one is
        25% wider and taller. What this means is you lose all the information
        around the edges of the picture, such as this good boy's back left paw
        and his lovely right paw.
      </p>
      <p>
        Back in the day of CRT TVs, there was an actual need to cut off the
        edges of the screen because they would look blurry and horrible. It's
        why your old standard-definition TV might have had rounded corners like
        this:
      </p>
      <ImgContainer>
        <img src={crtTv} alt="CRT TV" />
      </ImgContainer>
      <p>
        For whatever reason, when we made the move to digital TVs, this option
        continued as the standard setting for televisions out of the box.
        Apparently, if you have two TVs side by side and one has a magnified
        picture on with the edges cut off, the picture 'pops' more and is more
        appealing to consumers. That is nonsense.
      </p>
      <h3>Loss of information</h3>
      <p>
        When you cut off the edges of the screen, you lose information that was
        there before. For a particularly drastic example, see The Simpsons on
        Disney+ which was cropped at the top and bottom to get rid of black
        bars. @TristanACooper shared this on Twitter:
      </p>
      <ImgContainer height="60">
        <img src={simpsons} alt="Simpsons screenshot" />
      </ImgContainer>
      <p>
        Have a play with the slider below. It starts at 5% and shows you just
        how much information is lost on a standard 1080p (1920px*1080px) Full HD
        screen.
      </p>
      <Slider width="60" height="33.75" />
      <Footer />
    </div>
  );
}

export default App;
