import React from "react";

import styled from "styled-components";

const Button = ({ text, primary, secondary }) => {
  return <ButtonComponent>{text}</ButtonComponent>;
};

const ButtonComponent = styled.button`
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default Button;
