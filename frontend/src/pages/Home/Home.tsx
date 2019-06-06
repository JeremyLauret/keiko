import * as React from 'react';

import Style from './Home.style';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from 'services/networking/request';

interface Props {}
interface State {
  loading: boolean;
  error: boolean;
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
      loading: true,
      error: false,
      pokemons: [],
    };
  }

  async componentDidMount() {
    try {
      let response = await makeGetRequest('/pokemon');
      this.setState({ loading: false, pokemons: response.body });
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  }

  render(): React.ReactNode {
    return (
      <Style.Pokedex>
        <h1 className="pokedex-title">Pokedex</h1>
        {this.state.loading && <img src={`${process.env.PUBLIC_URL}/loader.svg`} alt="Loader" />}
        {this.state.error && <p className="error-message">Something wrong happened. Send help.</p>}
        <div className="pokedex-grid">
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
