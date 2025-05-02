import styled from "styled-components";


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

`

export const TitleParagraph = styled.p`
    font-family: ${props => props.theme.typography.baloo2["font-family"]};
    font-size: ${props => props.theme.typography.baloo2.TitleXL["font-size"]};
    font-weight: ${props => props.theme.typography.baloo2.TitleXL["font-weight"]};
    line-height:  ${props => props.theme.typography.baloo2.TitleXL["line-height"]};
`

export const SubTitleParagraph = styled.p`
    font-family: ${props => props.theme.typography.roboto["font-family"]};
    font-size: ${props => props.theme.typography.roboto.TitleL["font-size"]};
    font-weight: ${props => props.theme.typography.roboto.TitleL.fontWeight.regular};
    line-height:  ${props => props.theme.typography.roboto.TitleL["line-height"]};
`