import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';
import { fetchPokemonRequested, PokemonAction } from '../../redux/Pokemon';
import { getPokemon } from '../../redux/Pokemon';
import withDataFetching from '../../HOC/withDataFetching';

const withDataFetchingPokemon = withDataFetching(
  (
    props: RouteComponentProps<{ id: string }> & {
      fetchPokemonRequested(id: string): PokemonAction;
    },
  ) => {
    props.fetchPokemonRequested(props.match.params.id);
  },
)(Pokemon);

export default connect(
  getPokemon,
  { fetchPokemonRequested },
)(withDataFetchingPokemon);
