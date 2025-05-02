import styled from "styled-components";

interface LogoContainerProps {
    bgcolor: string
}

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    width: max-content;
    grid-row-gap: 1.25rem;
    grid-column-gap: 2.5rem;
`

export const ItemWrapper = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;    

    span {
        font-family: ${props => props.theme.typography.roboto["font-family"]};
        font-size: ${props => props.theme.typography.roboto.TitleM["font-size"]};
        font-weight: ${props => props.theme.typography.roboto.TitleM.fontWeight.regular};
        line-height:  ${props => props.theme.typography.roboto.TitleM["line-height"]};
        color: ${props => props.theme.colors["base-text"]};
        display: flex;
        align-items: center;        
    }

`

export const LogoContainer = styled.div<LogoContainerProps>`
    background-color: ${props => props.bgcolor};
    padding: 0.5rem;
    border-radius: 1000px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    div {
        display: flex;
    }
    

`