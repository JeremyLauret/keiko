import * as React from 'react';

import Style from './Pokemon.style';

// Return a string with a capital first letter.
let capitalizeFirstLetter = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

interface Props {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
  };
}

let Pokemon = (props: Props) => (
  <Style.PokemonPage>
    <div className="container">
      <h1 className="main-title">{capitalizeFirstLetter(props.pokemon.name)}</h1>
      <figure className="grid">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            props.pokemon.id
          }.png`}
          alt={capitalizeFirstLetter(props.pokemon.name)}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            props.pokemon.id
          }.png`}
          alt={`${capitalizeFirstLetter(props.pokemon.name)} back`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
            props.pokemon.id
          }.png`}
          alt={`Shiny ${capitalizeFirstLetter(props.pokemon.name)}`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
            props.pokemon.id
          }.png`}
          alt={`Shiny ${capitalizeFirstLetter(props.pokemon.name)} back`}
        />
      </figure>
      <div className="info">
        <p className="card-info">Height: {props.pokemon.height}</p>
        <p className="card-info">Weight: {props.pokemon.weight}</p>
        <p className="card-info">Id: {props.pokemon.id}</p>
      </div>
    </div>
  </Style.PokemonPage>
);

export default Pokemon;
