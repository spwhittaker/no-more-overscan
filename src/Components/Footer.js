import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  align-self: center;
  margin-top: auto;
  margin-bottom: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  a {
    color: teal;
  }
  a:visited {
    color: teal;
  }

  p {
    text-align: center;
  }
`;

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  let fullCopyrightText;
  if (year === 2020) {
    fullCopyrightText = (
      <p>
        Copyright ©{year}{" "}
        <a
          href="https://stephenwhittaker.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Whittaker
        </a>
      </p>
    );
  } else {
    fullCopyrightText = (
      <p>
        Copyright © 2020 - {year}{" "}
        <a
          href="https://stephenwhittaker.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Whittaker
        </a>
      </p>
    );
  }

  return (
    <StyledFooter>
      <a href="#top">
        <p>Top of page</p>
      </a>
      <strong>{fullCopyrightText}</strong>
      <a
        href="mailto:stephenwhittaker23@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Contact</p>
      </a>
    </StyledFooter>
  );
};
export default Footer;
