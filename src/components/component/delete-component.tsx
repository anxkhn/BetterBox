// pages/index.js or components/YourComponent.js
import styled, { keyframes } from "styled-components";

const iosDelete = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  60% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

const AnimatedImage = styled.img`
  display: block;
  margin: auto;
  width: 25%;
  height: auto;
  filter: grayscale(100%);
  animation: ${iosDelete} 5s ease infinite;
`;

const DeleteComponenet = () => <AnimatedImage src="https://static.ambitionbox.com/static/lock-golden.svg" width="550" height="310" alt="Image" />;

export default DeleteComponenet;
