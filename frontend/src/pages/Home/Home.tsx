import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';
    const pokemon_number = 7;
    const pokemon_image_url =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';

    return (
      <Style.Intro>
        <h1>
          Pokemon n°{pokemon_number} : {pokemon}
        </h1>
        <img src={pokemon_image_url} alt={pokemon} />
      </Style.Intro>
    );
  }
}

export default Home;
