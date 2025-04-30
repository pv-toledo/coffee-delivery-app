import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme //Transformando meu objeto JS em uma tipagem TS

declare module 'styled-components' {

    export interface DefaultTheme extends ThemeType {} //Incluindo o tema criado no conjunto de temas do styled components
}