import {  IntroContainer } from "./styles";
import background from '../../../../assets/background.svg'
import coffeeTitle from '../../../../assets/coffee-title.png'
import { Title } from "./Title";

export function Intro () {
    return (
        <IntroContainer bgImage={background}>
            <Title />
            <img src={coffeeTitle} alt="" />
        </IntroContainer>
    )
}