import { fetchPokemonSuccess, fetchPokemonsSuccess } from '../actions';
import reducer from '../reducer';

const initialState = { 1: { id: 1, name: 'bulbasaur', height: 7, weight: 69 } };
const pokemons = {
  91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
  92: { id: 92, name: 'gastly', height: 13, weight: 1 },
};
const pokemon = pokemons[91];

describe('Pokemon reducer', () => {
  describe('FETCH_POKEMON_SUCCESS case', () => {
    it('Should return an initial state with a pokemon in its id field', () => {
      const action = fetchPokemonSuccess(pokemon);
      const expectedState = { ...initialState, [pokemon.id]: pokemon };

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
