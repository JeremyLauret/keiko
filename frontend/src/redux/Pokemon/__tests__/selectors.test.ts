import { state } from '__fixtures__/state';
import { getPokemon, getPokemons } from '../selectors';

const pokemons = {
  91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
  92: { id: 92, name: 'gastly', height: 13, weight: 1 },
};

const initialState = { ...state, pokemon: pokemons };

describe('Pokemon selectors', () => {
  describe('getPokemon function', () => {
    it('Should return the value stored in store.pokemon.[pokemon.id]', () => {
      const urlMatch = { params: { id: '91' }, isExact: true, path: '', url: '' };
      expect(
        getPokemon(initialState, {
          match: urlMatch,
          location: jest.fn() as any,
          history: jest.fn() as any,
        }),
      ).toEqual({ pokemon: pokemons[91] });
    });
  });
  describe('getPokemons function', () => {
    it('Should return the value stored in store.pokemon', () => {
      const pokemonsArr = [
        { id: 91, name: 'cloyster', height: 15, weight: 1325 },
        { id: 92, name: 'gastly', height: 13, weight: 1 },
      ];
      expect(getPokemons(initialState)).toEqual({ pokemons: pokemonsArr });
    });
  });
});
