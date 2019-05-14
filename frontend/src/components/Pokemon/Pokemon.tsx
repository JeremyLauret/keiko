import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      this.props.id
    }.png`;

    return (
      <Style.Intro>
        <h1>
          Pokemon n°{this.props.id} : {this.props.name}
        </h1>
        <img src={pokemonImageUrl} alt={this.props.name} />
      </Style.Intro>
    );
  }
}

export default Pokemon;
