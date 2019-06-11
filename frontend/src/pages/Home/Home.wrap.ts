import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import { RootState } from '../../redux/types';
import {
  fetchPokemonsSuccess,
  PokemonState,
  PokemonType,
  PokemonAction,
} from '../../redux/Pokemon';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

const withDataFetchingHome = withDataFetching(
  (props: RouteComponentProps<{ page?: string }>) =>
    makeGetRequest(`/pokemon${props.match.params.page ? `?page=${props.match.params.page}` : ''}`),
  (
    props: { fetchPokemonsSuccess(pokemons: PokemonType | {}): PokemonAction },
    pokemons: PokemonState,
  ) => props.fetchPokemonsSuccess({}),
)(Home);

export default connect(
  mapStateToProps,
  { fetchPokemonsSuccess },
)(withDataFetchingHome);
