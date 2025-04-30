import { MapPin } from "phosphor-react";
import { LocationBarWrapper } from "./styles";
import { useTheme } from "styled-components";

export function LocationBar () {
    const theme = useTheme()
    return (
        <LocationBarWrapper>
            <MapPin size={22} color={theme.colors.purple} weight="fill" />
            <span>Porto Alegre, RS</span>
        </LocationBarWrapper>
    )
}