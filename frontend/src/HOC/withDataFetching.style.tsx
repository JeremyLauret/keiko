import styled from 'styled-components';

export default {
  DataFetching: styled.div`
    --error-size: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'PokemonFont';
    .error-message {
      font-size: var(--error-size);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,
};
