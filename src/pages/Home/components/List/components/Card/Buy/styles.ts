import styled from "styled-components";

export const BuyContainer = styled.div`
   margin-top: auto; //No fnal do container
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   

   span{
      color: ${props => props.theme.colors["base-text"]};
      font-family: ${props => props.theme.typography.roboto["font-family"]};
      font-size: ${props => props.theme.typography.roboto.TitleS["font-size"]};
      font-weight: ${props => props.theme.typography.roboto.TitleS["font-weight"]};
      line-height: ${props => props.theme.typography.roboto.TitleL["line-height"]};
   }

   span:last-child {
      color: ${props => props.theme.colors["base-text"]};
      font-family: ${props => props.theme.typography.baloo2["font-family"]};
      font-size: ${props => props.theme.typography.baloo2.TitleM["font-size"]};
      font-weight: ${props => props.theme.typography.baloo2.TitleM["font-weight"]};
      line-height: ${props => props.theme.typography.baloo2.TitleL["line-height"]};
   }

`

export const Actions = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem; 

   

`

export const Counter = styled.div`
   display: flex;
   align-items: center;
   margin: auto;
   gap: 0.25rem;
   padding: 0.5rem;
   border-radius: 6px;
   background-color: ${props => props.theme.colors["base-button"]};


   span {
      color: ${props => props.theme.colors["base-title"]};
      font-family: ${props => props.theme.typography.roboto["font-family"]};
      font-size: ${props => props.theme.typography.roboto.TitleL["font-size"]};
      font-weight: ${props => props.theme.typography.roboto.TitleL.fontWeight.regular};
      line-height: ${props => props.theme.typography.roboto.TitleL["line-height"]};
      width: 1.25rem;
      text-align: center;
   }

`

export const CounterButton = styled.button`
   background-color: transparent;
   display: flex;
   align-items: center;
   border: none;
   transition: all 0.2s ease;
   color: ${props => props.theme.colors.purple};

   &:hover {
      color: red;
      cursor: pointer;
   }

`

export const CartButton = styled.button`
   display: flex;
   gap: 0.5rem;
   border: none;
   border-radius: 6px;
   background-color: ${props => props.theme.colors["purple-dark"]};
   padding: 0.5rem;

`