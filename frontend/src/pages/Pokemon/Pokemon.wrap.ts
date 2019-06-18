import { connect } from 'react-redux';

import Pokemon from './Pokemon';
import { fetchPokemonSuccess } from '../../redux/Pokemon';
import { getPokemon } from '../../redux/Pokemon';

const withDataFetchingPokemon = Pokemon;

export default connect(
  getPokemon,
  { fetchPokemonSuccess },
)(withDataFetchingPokemon);
