import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import { fetchPokemonsSuccess, fetchPokemonsRequested, PokemonAction } from '../../redux/Pokemon';
import withDataFetching from '../../HOC/withDataFetching';
import { getPokemons } from '../../redux/Pokemon';

export type PokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
};

const withDataFetchingHome = withDataFetching(
  (
    props: RouteComponentProps<{ page?: string }> & {
      fetchPokemonsRequested(page: string): PokemonAction;
    },
  ) => {
    props.fetchPokemonsRequested(props.match.params.page ? props.match.params.page : '1');
  },
)(Home);

export default connect(
  getPokemons,
  { fetchPokemonsSuccess, fetchPokemonsRequested },
)(withDataFetchingHome);
