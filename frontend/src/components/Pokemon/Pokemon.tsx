import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

class Pokemon extends React.Component<Props> {
  // Return the Pokemon name with a capital first letter.
  get capitalName(): string {
    return `${this.props.name.charAt(0).toUpperCase()}${this.props.name.slice(1)}`;
  }

  get height(): number {
    return this.props.height * 10;
  }

  get weight(): number {
    return this.props.weight / 10;
  }

  render(): React.ReactNode {
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      this.props.id
    }.png`;

    return (
      <Style.PokemonCard>
        <h1>{this.capitalName}</h1>
        <img src={pokemonImageUrl} alt={this.capitalName} />
        <p>Id: {this.props.id}</p>
        <p>Weight: {this.weight} kg</p>
        <p>Height: {this.height} cm</p>
      </Style.PokemonCard>
    );
  }
}

export default Pokemon;
