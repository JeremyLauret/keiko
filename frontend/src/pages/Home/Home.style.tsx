import styled from 'styled-components';

export default {
  Pokedex: styled.div`
    --arrow-size: 32px;
    --title-size: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'PokemonFont';
    .nav {
      width: 100%;
      display: flex;
    }
    .arrow {
      padding: 5px 20px;
      font-size: var(--title-size);
      font-weight: bold;
      text-decoration: none;
      color: black;
    }
    .arrow-right {
      margin-left: auto;
    }
    .pokedex-title {
      font-size: var(--title-size);
      padding-top: 40px;
      padding-bottom: 20px;
    }
    .pokedex-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
    }
  `,
};
