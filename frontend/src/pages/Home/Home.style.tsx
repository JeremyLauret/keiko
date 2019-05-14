import styled from 'styled-components';

export default {
  Pokedex: styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    #pokedex-title {
      font-family: 'PokemonFont';
      font-size: 50px;
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .pokemon-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 5px;
    }
  `,
};
