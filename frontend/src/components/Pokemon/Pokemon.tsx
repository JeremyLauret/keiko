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

function Pokemon(props: Props) {
  const [displayBack, setDisplayBack] = React.useState(false);
  return (
    <Style.PokemonCard>
      <div className="top-row">
        <img className="hidden-ico" src={`${process.env.PUBLIC_URL}/turn-ico.svg`} alt="" />
        <h1 className="card-title">{capitalizeFirstLetter(props.name)}</h1>
        <img
          className="turn-ico"
          src={`${process.env.PUBLIC_URL}/turn-ico.svg`}
          alt=""
          onClick={() => setDisplayBack(!displayBack)}
        />
      </div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          displayBack ? 'back/' : ''
        }${props.id}.png`}
        alt={capitalizeFirstLetter(props.name)}
      />
      <p className="card-info">Id: {props.id}</p>
      <p className="card-info">Weight: {props.weight / 10} kg</p>
      <p className="card-info">Height: {props.height * 10} cm</p>
    </Style.PokemonCard>
  );
}

export default Pokemon;
