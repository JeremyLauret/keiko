import styled from 'styled-components';

export default {
  Pokedex: styled.div`
    --title-size: 32px;
    --error-size: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .pokedex-title {
      font-family: 'PokemonFont';
      font-size: var(--title-size);
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .pokedex-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
    }
    .error-message {
      font-size: var(--error-size);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,
};
