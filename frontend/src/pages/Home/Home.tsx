import * as React from 'react';

import Style from './Home.style';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from 'services/networking/request';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
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
      return <Style.Intro>Pokemons are loading, please wait...</Style.Intro>;
    }

    return (
      <Style.Intro>
        <Pokemon name={this.state.pokemons[3].name} id={this.state.pokemons[3].id} />
        <Pokemon name="carapuce" id={7} />
        <Pokemon name="carabaffe" id={8} />
        <Pokemon name="tortank" id={9} />
      </Style.Intro>
    );
  }
}

export default Home;
