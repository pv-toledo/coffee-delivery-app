import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;

`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        color: ${props => props.theme.colors["base-subtitle"]};
        font-family: ${props => props.theme.typography.baloo2["font-family"]};
        font-size: ${props => props.theme.typography.baloo2.TitleXS["font-size"]};
        font-weight: ${props => props.theme.typography.baloo2.TitleXS["font-weight"]};
        line-height: ${props => props.theme.typography.baloo2.TitleXS["line-height"]};
    }

`