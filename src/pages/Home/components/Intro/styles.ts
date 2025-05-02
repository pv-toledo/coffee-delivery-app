import styled from "styled-components";

interface IntroContainerProps {
  bgImage: string
}


export const IntroContainer = styled.div<IntroContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
   
`