import * as React from 'react';

import Style from './Pokemon.style';
import { makeGetRequest } from 'services/networking/request';

interface Props {}

function Pokemon(props: Props) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pokemon, setPokemon] = React.useState<{
    id: number;
    name: string;
    height: number;
    weight: number;
  }>({ id: 0, name: '', height: 0, weight: 0 });

  React.useEffect(() => {
    async function displayPokemon() {
      try {
        let response = await makeGetRequest(`/pokemon/${1}`);
        setPokemon(response.body);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    displayPokemon();
  });

  return (
    <Style.PokemonPage>
      {loading && <img src={`${process.env.PUBLIC_URL}/loader.svg`} alt="Loader" />}
      {error && <p className="error-message">Something wrong happened. Send help.</p>}
      {!error && !loading && <p>name: {pokemon.name}</p>}
    </Style.PokemonPage>
  );
}

export default Pokemon;
