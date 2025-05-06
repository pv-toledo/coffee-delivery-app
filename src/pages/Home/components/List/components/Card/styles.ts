import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    width: 256px;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    background-color: ${props => props.theme.colors["base-card"]};
    border: none;
    border-top-right-radius: 36px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
    
    
    img {
        position: absolute;
        top: -1.25rem;
        left: 50%;
        transform: translateX(-50%);
        height: 120px;
        width: 120px;
        
    }

`

export const CardTagContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5.75rem;
   
    
`

export const Tag = styled.div`
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.colors["yellow-light"]};
    color: ${props => props.theme.colors["yellow-dark"]};
    font-family: ${props => props.theme.typography.roboto["font-family"]};
    font-size: ${props => props.theme.typography.roboto.Tag["font-size"]};
    font-weight: ${props => props.theme.typography.roboto.Tag["font-weight"]};
    line-height: ${props => props.theme.typography.roboto.Tag["line-height"]};
    border-radius: 100px;
    margin-bottom: 1rem;
`

export const Title = styled.p`
    color: ${props => props.theme.colors["base-subtitle"]};
    font-family: ${props => props.theme.typography.baloo2["font-family"]};
    font-size: ${props => props.theme.typography.baloo2.TitleS["font-size"]};
    font-weight: ${props => props.theme.typography.baloo2.TitleS["font-weight"]};
    line-height: ${props => props.theme.typography.baloo2.TitleS["line-height"]};
    margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
    color: ${props => props.theme.colors["base-label"]};
    font-family: ${props => props.theme.typography.roboto["font-family"]};
    font-size: ${props => props.theme.typography.roboto.TitleS["font-size"]};
    font-weight: ${props => props.theme.typography.roboto.TitleS["font-weight"]};
    line-height: ${props => props.theme.typography.roboto.TitleS["line-height"]};
    text-align: center;

`


