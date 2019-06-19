import { createStandardAction } from 'typesafe-actions';
import { PokemonState } from './reducer';
import { PokemonType } from '../../pages/Home';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  PokemonState
>();
export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<
  PokemonType
>();
export const fetchPokemonsRequested = createStandardAction('Pokemon/FETCH_POKEMONS_REQUESTED')<
  string
>();
export const fetchPokemonRequested = createStandardAction('Pokemon/FETCH_POKEMON_REQUESTED')<
  string
>();

export default {
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
  fetchPokemonsRequested,
  fetchPokemonRequested,
};
