import { CardContainer, CardTagContainer, Subtitle, Tag, Title } from "./styles";
import teste from '../../../../../../assets/Coffees/teste.png'
import { Buy } from "./Buy";


export function Card() {
    return (
        <CardContainer>
            <img src={teste} alt="" />

            <CardTagContainer>
                <Tag>TRADICIONAL</Tag>
            </CardTagContainer>

            <Title>Expresso Tradicional</Title>
            <Subtitle>O tradicional café feito com água quente e grãos moídos</Subtitle>

            <Buy /> 

        </CardContainer> 
    )
} 