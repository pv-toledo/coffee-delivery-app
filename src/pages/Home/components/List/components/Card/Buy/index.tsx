import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { Actions, BuyContainer, CartButton, Counter, CounterButton } from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";

interface BuyProps {
    id: string
}

export function Buy({ id }: BuyProps) {
    const theme = useTheme()

    const [amount, setAmount] = useState<number>(0);

    function increaseAmount() {
        setAmount(state => state + 1)
    }

    function decreaseAmount() {
        if (amount > 0) return setAmount(state => state - 1)
    }

    return (
        <BuyContainer>
            <div>
                <span>R$ </span><span>9,90</span>
            </div>

            <Actions>
                <Counter>
                    <CounterButton onClick={decreaseAmount}> {/* currentColor para definir a cor em styles.ts */}
                        <Minus size={14} color="currentColor" weight="bold" />
                    </CounterButton>

                    <span>{amount}</span>

                    <CounterButton onClick={increaseAmount}>
                        <Plus size={14} color="currentColor" weight="bold" />
                    </CounterButton>
                </Counter>

                <CartButton value={id}>
                    <ShoppingCartSimple size={22} color={theme.colors["base-card"]} weight="fill" />
                </CartButton>

            </Actions>

        </BuyContainer>
    )
}