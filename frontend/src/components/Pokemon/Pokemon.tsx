import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

class Pokemon extends React.Component<Props> {
  // The Pokemon name with a capital first letter.
  capitalName = () => `${this.props.name.charAt(0).toUpperCase()}${this.props.name.slice(1)}`;

  height = () => this.props.height * 10;

  weight = () => this.props.weight / 10;

  render(): React.ReactNode {
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      this.props.id
    }.png`;

    return (
      <Style.PokemonCard>
        <h1 className="card-title">{this.capitalName()}</h1>
        <img src={pokemonImageUrl} alt={this.capitalName()} />
        <p className="card-info">Id: {this.props.id}</p>
        <p className="card-info">Weight: {this.weight()} kg</p>
        <p className="card-info">Height: {this.height()} cm</p>
      </Style.PokemonCard>
    );
  }
}

export default Pokemon;
