import styled from 'styled-components';

export default {
  PokemonCard: styled.div`
    --title-size: 13px;
    --info-size: 10px;
    position: relative;
    border-style: double;
    border-width: 5px;
    font-family: 'PokemonFont';
    .turn-ico {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    .column {
      padding: 10px 50px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .card-link {
      text-decoration: none;
      color: black;
    }
    .card-title {
      font-size: var(--title-size);
    }
    .card-info {
      font-size: var(--info-size);
      padding-top: 0.3em;
      padding-bottom: 0.3em;
    }
  `,
};
