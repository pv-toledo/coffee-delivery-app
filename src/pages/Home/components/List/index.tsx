import { Card } from "./components/Card";
import { CoffeeList, ListContainer } from "./styles";

export function List () {
    return (
        <ListContainer>
            <h2>Nossos cafés</h2>
            <CoffeeList>
                <Card /> 
            </CoffeeList>
        </ListContainer>
        
    )
} 