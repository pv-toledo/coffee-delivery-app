import styled from "styled-components";

export const LocationBarWrapper = styled.div`
    background-color: ${props => props.theme.colors["purple-light"]};
    padding: 0.5rem;
    border-radius: 6px; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    span {
        font-family: ${props => props.theme.typography.roboto["font-family"]};
        font-size: ${props => props.theme.typography.roboto.TitleS["font-size"]};
        line-height: ${props => props.theme.typography.roboto.TitleS["line-height"]};
        color: ${props => props.theme.colors["purple-dark"]};
    }

`