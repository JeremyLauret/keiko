import * as React from 'react';

import Style from './Home.style';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from 'services/networking/request';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
    height: number;
    weight: number;
  }[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    makeGetRequest('/pokemon').then(response => this.setState({ pokemons: response.body }));
  }

  render(): React.ReactNode {
    if (this.state.pokemons.length == 0) {
      return <Style.Pokedex>Pokemons are loading, please wait...</Style.Pokedex>;
    }

    return (
      <Style.Pokedex>
        <h1 id="pokedex-title">Pokedex</h1>
        <div className="pokemon-grid">
          {this.state.pokemons.map(item => (
            <Pokemon
              name={item.name}
              id={item.id}
              height={item.height}
              weight={item.weight}
              key={item.id}
            />
          ))}
        </div>
      </Style.Pokedex>
    );
  }
}

export default Home;
