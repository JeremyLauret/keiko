// Refer to https://stackoverflow.com/questions/42675725/isolated-styled-components-with-font-face
// for more information on loading global fonts with styled-components.

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
     font-family: 'PokemonFont';
     src: url('/fonts/pokemon-gb.ttf') format('truetype');
  }
`;
