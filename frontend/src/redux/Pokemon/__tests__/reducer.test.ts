import { fetchPokemonSuccess, fetchPokemonsSuccess } from '../actions';
import { pokemons, cloyster } from '__fixtures__/pokemons';
import reducer from '../reducer';

const initialState = { 1: { id: 1, name: 'bulbasaur', height: 7, weight: 69 } };

describe('Pokemon reducer', () => {
  describe('FETCH_POKEMON_SUCCESS case', () => {
    it('Should return an initial state with a pokemon in its id field', () => {
      const action = fetchPokemonSuccess(cloyster);
      const expectedState = { ...initialState, [cloyster.id]: cloyster };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_POKEMONS_SUCCESS case', () => {
    it('Should return a new state with pokemons in their id fields', () => {
      const action = fetchPokemonsSuccess(pokemons);
      const expectedState = { ...pokemons };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
