import theme from 'styles/theme'

//inferencia de tipos
type Theme = typeof theme

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
