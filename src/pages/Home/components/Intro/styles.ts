import styled from "styled-components";

export const Hero = styled.div`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
      font-family: ${props => props.theme.typography.baloo2["font-family"]};
      font-size: ${props => props.theme.typography.baloo2.TitleXL["font-size"]};
      font-weight: ${props => props.theme.typography.baloo2.TitleXL["font-weight"]};
      line-height: ${props => props.theme.typography.baloo2.TitleXL["line-height"]};
    }

    > span {
      font-family: ${props => props.theme.typography.roboto["font-family"]};
      font-size: ${props => props.theme.typography.roboto.TitleL["font-size"]};
      font-weight: ${props => props.theme.typography.roboto.TitleL.fontWeight.regular};
      line-height: ${props => props.theme.typography.roboto.TitleL["line-height"]};
    }

`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }

    span {
      font-family: ${props => props.theme.typography.roboto["font-family"]};
      font-size: ${props => props.theme.typography.roboto.TitleM["font-size"]};
      font-weight: ${props => props.theme.typography.roboto.TitleM.fontWeight.regular};
      line-height: ${props => props.theme.typography.roboto.TitleM["line-height"]};
    }
  }
`