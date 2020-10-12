import React from "react";
import { ImgContainer } from "./Components/ImgContainer";
import { MainHeading, Subheading } from "./Components/Headings";
import { StyledSlider } from "./Components/Slider";
import Footer from "./Components/Footer";
// import { Checkerboard } from "./Components/Checkerboard";
import CheckerboardContainer from "./Components/CheckerboardContainer";
import dogPic from "./images/dog.jpg";
import crtTv from "./images/tv-television-vintage-oldschool.jpg";
import simpsons from "./images/frc-e912be841be584ce75702492dda951e3.png";
function App() {
  return (
    <div className="App">
      <main>
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
        <p>
          The two images above are in the same size of box, but the second one
          has been stretched 25% wider and taller, with the edges chopped off.
          What this means is you lose all the information around the edges of
          the picture, such as the back left paw and the lovely right ear of the
          good boy above.
        </p>
        <Subheading>What is overscan, and why should you hate it?</Subheading>
        <p>
          Back in the day of CRT TVs, there was an actual need to cut off the
          edges of the screen because they would look blurry and horrible. It's
          why your old standard-definition TV might have had rounded corners
          like this:
        </p>
        <ImgContainer>
          <img src={crtTv} alt="CRT TV" />
        </ImgContainer>
        <p>
          For whatever reason, when we made the move to digital TVs, this option
          continued as the standard setting for televisions out of the box and
          its name is <i>overscan</i>. Apparently, if you have two TVs side by
          side and one displays a magnified picture with the edges cut off, the
          picture 'pops' more and is more appealing to consumers. That is
          nonsense. Allow me to explain why.
        </p>
        <hr />
        <h2>1. Loss of information</h2>
        <p>
          When you cut off the edges of the screen, you lose information that
          was there before. For a particularly drastic example, see The Simpsons
          on Disney+ which was cropped at the top and bottom to get rid of black
          bars. @TristanACooper shared this on Twitter:
        </p>
        <ImgContainer height="60">
          <img src={simpsons} alt="Simpsons screenshot" />
        </ImgContainer>
        <p>
          Have a play with the slider below. It starts at 5% and shows you just
          how much information is lost on a standard 1080p (1920px*1080px) Full
          HD screen.{" "}
        </p>
        <StyledSlider width="60" height="33.75" />
        <hr />
        <h2>2. Stretched pixels</h2>
        <p>
          Imagine your screen is a grid of little squares. For simplicity's
          sake, image it's an 8 by 8 grid, like a chessboard. Your screen is
          represented by the board on the left and the image you want to display
          is on the right. Move the slider across and you can see how every
          pixel of the image lines up with every pixel of the screen.
        </p>
        <CheckerboardContainer board2RowNum={8} />

        <p>
          Here is a second one. But let's imagine that you've cut off an eighth
          of the picture on each side and stretched the image to fill the
          available space. You'd expect to see something like this. Move the
          slider over to see what happens when you try to display that 6x6 image
          on an 8x8 screen.
        </p>
        <CheckerboardContainer board2RowNum={6} />
        <p>
          You can see that the images don't line up. If you are watching
          something that originally had a resolution of 1080p (1920 pixels wide,
          1080 pixels high, 2,073,600 pixels total) and you watched it{" "}
          <i>without</i> overscan on your 1080p TV, the image would be properly
          displayed, with every one of the 2,073,600 pixels of the image having
          a corresponding pixel on the screen.{" "}
        </p>
        <p>
          However, if overscan <i>were</i> applied, the TV would have to figure
          out where to put this new smaller image, and each pixel could no
          longer be mapped directly into its place on the screen. There are many
          techniques to smooth out and improve an image with fewer pixels than
          the screen it's displayed on, but it's a pointless problem to solve
          when it could be avoided by simply{" "}
          <strong>not altering the image in the first place</strong>.
        </p>
        <section>
          <h1>Turning off the settings</h1>
          <p>
            Annoyingly, TVs often come with overscan already turned on. Here's
            how to turn it off. The options on your TV may have slightly
            different names.
          </p>
          <ul>
            <li>
              Go to Menu/Settings, then Picture settings. If all the options are
              greyed out, you may need to set up Custom settings. If almost all
              the settings are locked, it is possible your TV is in 'hotel
              mode', which as you might have guessed is used by hotels to stop
              guests messing with the TV. You can usually find instructions on
              how to turn it off by Googling '[brand of TV] hotel mode unlock'
              (it's generally a long series of button presses on the remote).
            </li>
            <li>
              Find 'Zoom mode', which will probably be set to 'Auto'. You don't
              want Auto, that has overscan. Cycle through the options until you
              see 'Full', and then you will see the whole image on your screen!
              If you have a standard widescreen TV, sometimes the option that
              you want is '16:9', but compare to see if there is also a 'Full'
              option as the 16:9 option often has overscan as well.
            </li>
          </ul>
          <p>
            On some TVs, there is no way to turn off overscan. You can try to
            correct for this on some devices such as games consoles, which will
            have the option to squash the image into the centre of the screen to
            account for what is cut off at the edges. It isn't as good as
            turning the overscan off, since you are still getting stretched
            pixels and a lower resolution image, but it's better than nothing!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
