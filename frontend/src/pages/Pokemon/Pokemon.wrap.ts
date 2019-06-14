// export default withDataFetching('pokemon', (props: RouteComponentProps<{ id: string }>) =>
//   makeGetRequest(`/pokemon/${props.match.params.id}`),
// )(Pokemon);

import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';
import { RootState } from '../../redux/types';
// import { fetchPokemonSuccess, PokemonAction } from '../../redux/Pokemon';
// import { PokemonType } from '../Home';
// import withDataFetching from '../../HOC/withDataFetching';
// import { makeGetRequest } from 'services/networking/request';
// import { normalize } from '../../services/PokemonNormalizer';

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps<{ id: string }>) => ({
  //   pokemon: state.pokemon[ownProps.match.params.id],
  pokemon: state.pokemon['91'],
});

// const withDataFetchingPokemon = withDataFetching(
//   (props: RouteComponentProps<{ id: string }>) =>
//     makeGetRequest(`/pokemon/${props.match.params.id}`),
//   (
//     props: { fetchPokemonSuccess(pokemon: PokemonType | {}): PokemonAction },
//     pokemons: PokemonType[],
//   ) => props.fetchPokemonsSuccess(normalize(pokemons)),
// )(Home);

export default connect(
  mapStateToProps,
  //   { fetchPokemonsSuccess },
)(Pokemon);
