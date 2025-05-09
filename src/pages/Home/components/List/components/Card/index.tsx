import { CardContainer, CardTagContainer, Subtitle, Tag, Title } from "./styles";
import { Buy } from "./Buy";

export interface CoffeeDataType {
    id: string
    title: string
    subtitle: string
    tags: string[]
    price: number
    image: string
}

interface CardProps {
    item: CoffeeDataType
}

export function Card({item}: CardProps) {
    return (
        <CardContainer>
            <img src={item.image}/>

            <CardTagContainer>

                {item.tags.map(tag => (
                    <Tag>{tag.toUpperCase()}</Tag>
                ))}
                
            </CardTagContainer>

            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>

            <Buy
                id={item.id} 
            />

        </CardContainer>
    )
} 