import { Items } from "../Items";
import { SubTitleParagraph, TitleContainer, TitleParagraph } from "./styles";

export function Title () {
    return (
        <TitleContainer>
            <TitleParagraph>Encontre o café perfeito para qualquer hora do dia</TitleParagraph>

            <SubTitleParagraph>Com o coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitleParagraph>

            <Items />
        </TitleContainer>
        
    )
}