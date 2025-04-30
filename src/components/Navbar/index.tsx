import { Actionbar } from "./Actionbar";
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { NavbarContainer } from "./styles";

export function Navbar () {
    return (
        <NavbarContainer>
            <img src={coffeeDeliveryLogo} />
            <Actionbar />
        </NavbarContainer>
            
    )
}