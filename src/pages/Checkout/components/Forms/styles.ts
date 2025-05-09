import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors["base-card"]};
    border-radius: 6px;

`
export const WrapperTitle = styled.div`
    display: flex;
    align-self: flex-start;
    flex-grow:1;
    gap: 0.5rem;

    .title {
        color: ${props => props.theme.colors["base-subtitle"]};
        font-family: ${props => props.theme.typography.roboto["font-family"]};
        font-size: ${props => props.theme.typography.roboto.TitleM["font-size"]};
        font-weight: ${props => props.theme.typography.roboto.TitleM.fontWeight.regular};
        line-height: ${props => props.theme.typography.roboto.TitleM["line-height"]};

    }

    .subtitle {
        color: ${props => props.theme.colors["base-text"]};
        font-family: ${props => props.theme.typography.roboto["font-family"]};
        font-size: ${props => props.theme.typography.roboto.TitleS["font-size"]};
        font-weight: ${props => props.theme.typography.roboto.TitleS["font-weight"]};
        line-height: ${props => props.theme.typography.roboto.TitleS["line-height"]};

    }

`

