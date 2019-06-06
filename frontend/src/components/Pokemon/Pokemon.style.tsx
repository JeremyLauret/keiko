import styled from 'styled-components';

export default {
  PokemonCard: styled.div`
    padding-bottom: 10px;
    border-style: double;
    border-width: 5px;
    font-family: 'PokemonFont';
    display: flex;
    align-items: center;
    flex-direction: column;

    /* Top row */
    .top-row {
      display: flex;
      width: 250px;
    }
    .card-title {
      margin-top: 10px;
      font-size: 13px;
    }
    .hidden-ico {
      margin-right: auto;
      visibility: hidden;
    }
    .turn-ico {
      margin-left: auto;
    }

    /* Bottom text */
    .card-info {
      font-size: 10px;
      padding-top: 0.3em;
      padding-bottom: 0.3em;
    }
  `,
};
