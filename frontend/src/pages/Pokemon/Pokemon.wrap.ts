import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';
import { fetchPokemonSuccess, PokemonAction } from '../../redux/Pokemon';
import { PokemonType } from '../Home';
import { getPokemon } from '../../redux/Pokemon';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';

// const withDataFetchingPokemon = withDataFetching(
//   (props: RouteComponentProps<{ id: string }>) =>
//     makeGetRequest(`/pokemon/${props.match.params.id}`),
//   (
//     props: { fetchPokemonSuccess(pokemon: PokemonType | {}): PokemonAction },
//     pokemon: PokemonType,
//   ) => props.fetchPokemonSuccess(pokemon),
// )(Pokemon);
const withDataFetchingPokemon = Pokemon;

export default connect(
  getPokemon,
  { fetchPokemonSuccess },
)(withDataFetchingPokemon);
