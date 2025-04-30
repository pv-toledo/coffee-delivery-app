import { CartLogo } from "./CartLogo";
import { LocationBar } from "./LocationBar";
import { NavbarContainer } from "./styles";

export function Navbar () {
    return (
        <NavbarContainer>
            <LocationBar />
            <CartLogo />
        </NavbarContainer>
            
    )
}