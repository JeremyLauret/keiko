import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

// Return a string with a capital first letter.
let capitalizeFirstLetter = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

let Pokemon = (props: Props) => (
  <Style.PokemonCard>
    <h1 className="card-title">{capitalizeFirstLetter(props.name)}</h1>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        props.id
      }.png`}
      alt={capitalizeFirstLetter(props.name)}
    />
    <p className="card-info">Id: {props.id}</p>
    <p className="card-info">Weight: {props.weight / 10} kg</p>
    <p className="card-info">Height: {props.height * 10} cm</p>
  </Style.PokemonCard>
);

export default Pokemon;
