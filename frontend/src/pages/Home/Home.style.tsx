import styled from 'styled-components';

export default {
  Pokedex: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    .pokedex-title {
      font-family: 'PokemonFont';
      font-size: 32px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .pokedex-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
    }
  `,
};
