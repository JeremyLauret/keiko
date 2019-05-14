import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  // Return the Pokemon name with its first letter capitalized.
  get capitalName(): string {
    return `${this.props.name.charAt(0).toUpperCase()}${this.props.name.slice(1)}`;
  }

  render(): React.ReactNode {
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      this.props.id
    }.png`;

    return (
      <Style.PokemonCard>
        <h1>
          Pokemon n°{this.props.id} : {this.capitalName}
        </h1>
        <img src={pokemonImageUrl} alt={this.capitalName} />
      </Style.PokemonCard>
    );
  }
}

export default Pokemon;
