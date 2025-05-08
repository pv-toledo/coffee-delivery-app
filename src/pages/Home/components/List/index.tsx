import { Card } from "./components/Card";
import { CoffeeList, ListContainer } from "./styles";
import { coffees } from "../../../../../data.json"
export function List() {
    return (
        <ListContainer>
            <div id="wrapper">
                <h2>Nossos cafés</h2>

                <CoffeeList>
                    {coffees.map(coffee => (
                        <Card
                            item={coffee}
                            key={coffee.id}
                        />
                    ))}
                </CoffeeList>

            </div>

        </ListContainer>

    )
} 