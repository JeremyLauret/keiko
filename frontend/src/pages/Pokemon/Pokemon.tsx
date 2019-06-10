import * as React from 'react';

import Style from './Pokemon.style';

// Return a string with a capital first letter.
const capitalizeFirstLetter = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const renderPokemonPicture = (id: number, name: string, back: boolean, shiny: boolean) => (
  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      back ? 'back/' : ''
    }${shiny ? 'shiny/' : ''}${id}.png`}
    alt={capitalizeFirstLetter(name)}
  />
);

interface Props {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
  };
}

const Pokemon = (props: Props) => (
  <Style.PokemonPage>
    <div className="container">
      <h1 className="main-title">{capitalizeFirstLetter(props.pokemon.name)}</h1>
      <figure className="grid">
        {renderPokemonPicture(props.pokemon.id, props.pokemon.name, false, false)}
        {renderPokemonPicture(props.pokemon.id, props.pokemon.name, true, false)}
        {renderPokemonPicture(props.pokemon.id, props.pokemon.name, false, true)}
        {renderPokemonPicture(props.pokemon.id, props.pokemon.name, true, true)}
      </figure>
      <div className="info">
        <p>Height: {props.pokemon.height}</p>
        <p>Weight: {props.pokemon.weight}</p>
        <p>Id: {props.pokemon.id}</p>
      </div>
    </div>
  </Style.PokemonPage>
);

export default Pokemon;
