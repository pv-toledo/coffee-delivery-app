import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { Actions, BuyContainer, CartButton, Counter } from "./styles";
import { useTheme } from "styled-components";

export function Buy() {
    const theme = useTheme()
    return (
        <BuyContainer>
            <div>
                <span>R$ </span><span>9,90</span>
            </div>

            <Actions>
                <Counter>
                    <button>
                        <Minus size={14} color={theme.colors.purple} weight="bold" />
                    </button>

                    <span>1</span>

                    <button>
                        <Plus size={14} color={theme.colors.purple} weight="bold" />
                    </button>
                </Counter>

                <CartButton>
                    <ShoppingCartSimple size={22} color={theme.colors["base-card"]} weight="fill" />
                </CartButton>

            </Actions>

        </BuyContainer> 
    )
}