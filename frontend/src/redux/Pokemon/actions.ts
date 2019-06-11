import { createStandardAction } from 'typesafe-actions';
import { PokemonType } from './types';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  PokemonType
>();

export default { fetchPokemonsSuccess };
