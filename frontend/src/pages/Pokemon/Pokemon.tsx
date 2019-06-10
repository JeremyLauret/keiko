import * as React from 'react';

import Style from './Pokemon.style';
import { makeGetRequest } from 'services/networking/request';
import { RouteComponentProps } from 'react-router-dom';

// Return a string with a capital first letter.
let capitalizeFirstLetter = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

function Pokemon(props: RouteComponentProps<{ id: string }>) {
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
        let response = await makeGetRequest(`/pokemon/${props.match.params.id}`);
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
      {!error && !loading && (
        <div className="container">
          <h1 className="main-title">{capitalizeFirstLetter(pokemon.name)}</h1>
          <figure className="grid">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.id
              }.png`}
              alt={capitalizeFirstLetter(pokemon.name)}
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                pokemon.id
              }.png`}
              alt={`${capitalizeFirstLetter(pokemon.name)} back`}
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
                pokemon.id
              }.png`}
              alt={`Shiny ${capitalizeFirstLetter(pokemon.name)}`}
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
                pokemon.id
              }.png`}
              alt={`Shiny ${capitalizeFirstLetter(pokemon.name)} back`}
            />
          </figure>
          <div className="info">
            <p className="card-info">Height: {pokemon.height}</p>
            <p className="card-info">Weight: {pokemon.weight}</p>
            <p className="card-info">Id: {pokemon.id}</p>
          </div>
        </div>
      )}
    </Style.PokemonPage>
  );
}

export default Pokemon;
