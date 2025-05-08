import { Card } from "./components/Card";
import { CoffeeList, ListContainer } from "./styles";

export function List() {
    return (
        <ListContainer>
            <div id="wrapper">
                <h2>Nossos cafés</h2>

                <CoffeeList>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CoffeeList>

            </div>



        </ListContainer>

    )
} 