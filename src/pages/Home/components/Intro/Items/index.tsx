import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ItemsContainer, ItemWrapper, LogoContainer } from "./styles";
import { useTheme } from "styled-components";

export function Items () {
    const theme = useTheme()
    return (
        <ItemsContainer>
            <ItemWrapper>
                <LogoContainer bgcolor={theme.colors["yellow-dark"]}>
                    <div>
                        <ShoppingCart
                            size={16}
                            color={theme.colors.background} 
                            weight="fill"
                        />
                    </div>
                </LogoContainer>
                <span>Compra simples e segura</span>
            </ItemWrapper>

            <ItemWrapper>
                <LogoContainer bgcolor={theme.colors["base-text"]}>
                    <div>
                        <Package
                            size={16}
                            color={theme.colors.background} 
                            weight="fill"
                        />
                    </div>
                    
                </LogoContainer>
                <span>Embalagem mantém o café intacto</span>
            </ItemWrapper>

            <ItemWrapper>
                <LogoContainer bgcolor={theme.colors.yellow}>
                    <div>
                        <Timer
                            size={16}
                            color={theme.colors.background} 
                            weight="fill"
                        />
                    </div>
                    
                </LogoContainer>
                <span>Entrega rápida e rastreada</span>
            </ItemWrapper>

            <ItemWrapper>
                <LogoContainer bgcolor={theme.colors.purple}>
                    <div>
                        <Coffee
                            size={16}
                            color={theme.colors.background} 
                            weight="fill"
                        />
                    </div>
                    
                </LogoContainer>
                <span>O café chega fresquinho até você</span>
            </ItemWrapper>

        </ItemsContainer>
    )
}