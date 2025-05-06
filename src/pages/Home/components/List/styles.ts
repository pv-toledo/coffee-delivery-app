import styled from "styled-components";

export const ListContainer = styled.div`
    min-height: 1645px;
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    margin-top: 2rem;
    justify-content: flex-start;
    align-items: center;
    
    h2 {
        align-self: flex-start;
        margin-left: 10rem;
        font-family: ${props => props.theme.typography.baloo2["font-family"]};
        font-size: ${props => props.theme.typography.baloo2.TitleL["font-size"]};
        font-weight: ${props => props.theme.typography.baloo2.TitleL["font-weight"]};
        line-height: ${props => props.theme.typography.baloo2.TitleL["line-height"]};
    }

`

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;

`