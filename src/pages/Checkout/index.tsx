import { Forms } from "./components/Forms";
import { CheckoutContainer, FormWrapper } from "./styles";

export function Checkout () {
    return(
        <CheckoutContainer>
            <FormWrapper>
                <div>
                    <p>Complete seu pedido</p>
                </div>
                <Forms/>
            </FormWrapper>
        </CheckoutContainer>
    )
}