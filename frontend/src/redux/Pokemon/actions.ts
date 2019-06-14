import { createStandardAction } from 'typesafe-actions';
import { PokemonState } from './reducer';
import { PokemonType } from '../../pages/Home';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  PokemonState
>();
export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<
  PokemonType
>();

export default { fetchPokemonsSuccess, fetchPokemonSuccess };
