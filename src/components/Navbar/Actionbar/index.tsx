import { CartLogo } from "./CartLogo";
import { LocationBar } from "./LocationBar";
import { ActionbarContainer } from "./styles";

export function Actionbar () {
    return (
        <ActionbarContainer>
            <LocationBar />
            <CartLogo />
        </ActionbarContainer>
    )
}