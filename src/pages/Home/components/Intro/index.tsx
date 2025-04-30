import { BackgroundImg, IntroContainer } from "./styles";
import teste from '../../../../assets/background.svg'

export function Intro () {
    return (
        <IntroContainer>
            <BackgroundImg src={teste} />
        </IntroContainer>
    )
}