import styled from 'styled-components';

export default {
  PokemonPage: styled.div`
    --error-size: 50px;
    --title-size: 30px;
    --info-size: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .error-message {
      font-size: var(--error-size);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .grid {
      display: grid;
      grid-template-columns: auto auto;
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: 'PokemonFont';
    }
    .main-title {
      font-size: var(--title-size);
      margin-top: 45px;
      margin-bottom: 20px;
    }
    .info {
      font-size: var(--info-size);
      line-height: 1.5;
    }
  `,
};
