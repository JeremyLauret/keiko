import styled from 'styled-components';

export default {
  PokemonCard: styled.div`
    max-width: 150px;
    padding: 10px 50px;
    border-style: double;
    border-width: 5px;
    font-family: 'PokemonFont';
    display: flex;
    align-items: center;
    flex-direction: column;
    #card-title {
      font-size: 13px;
    }
    p {
      font-size: 10px;
      padding-top: 0.3em;
      padding-bottom: 0.3em;
    }
    #card-img {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  `,
};
