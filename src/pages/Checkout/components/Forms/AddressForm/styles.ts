import styled from "styled-components";

export const AddressFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    width: 40rem;
    div {
        display: flex;
        gap: 0.75rem;
    }

`

const BaseInput = styled.input`
    background-color: ${props => props.theme.colors["base-input"]};
    padding: 0.75rem;
    border: 2px solid ${props => props.theme.colors["base-button"]};
    border-radius: 4px;

    &::placeholder {
        color: ${props => props.theme.colors["base-label"]};
        font-family: ${props => props.theme.typography.roboto["font-family"]};
        font-size: ${props => props.theme.typography.roboto.TitleS["font-size"]};
        font-weight: ${props => props.theme.typography.roboto.TitleS["font-weight"]};
        line-height: ${props => props.theme.typography.roboto.TitleS["line-height"]};

    }
`

export const CepInput = styled(BaseInput)`
    max-width: 12.5rem;
`

export const RuaInput = styled(BaseInput)`
`

export const NumeroInput = styled(BaseInput)`
    max-width: 12.5rem;

`

export const ComplementoInput = styled(BaseInput)`
    flex-grow: 1;

`

export const BairroInput = styled(BaseInput)`
    max-width: 12.5rem;

`

export const CidadeInput = styled(BaseInput)`
    flex-grow: 1;

`

export const UfInput = styled(BaseInput)`
    max-width: 3.75rem;

`