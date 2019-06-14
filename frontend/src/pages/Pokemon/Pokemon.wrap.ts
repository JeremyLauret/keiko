import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';
import { RootState } from '../../redux/types';
import { fetchPokemonSuccess, PokemonAction } from '../../redux/Pokemon';
import { PokemonType } from '../Home';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';

const getPokemon = (state: RootState, ownProps: RouteComponentProps<{ id: string }>) => ({
  pokemon: state.pokemon[ownProps.match.params.id],
});

const withDataFetchingPokemon = withDataFetching(
  (props: RouteComponentProps<{ id: string }>) =>
    makeGetRequest(`/pokemon/${props.match.params.id}`),
  (
    props: { fetchPokemonSuccess(pokemon: PokemonType | {}): PokemonAction },
    pokemon: PokemonType,
  ) => props.fetchPokemonSuccess(pokemon),
)(Pokemon);

export default connect(
  getPokemon,
  { fetchPokemonSuccess },
)(withDataFetchingPokemon);
