import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { CartLogoContainer } from "./styles";



export function CartLogo () {

    //Para quando eu quiser acessar o tema dentro de um componente react
    const theme = useTheme()

    return (

        <CartLogoContainer>
            <ShoppingCart size={22} color={theme.colors["yellow-dark"]} weight="fill" /> {/* weight = fill é para preencher o ícone */}
        </CartLogoContainer>
        
    )
}