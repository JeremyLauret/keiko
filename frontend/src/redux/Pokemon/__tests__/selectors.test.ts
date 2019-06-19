import { state } from '__fixtures__/state';
import { getPokemon, getPokemons } from '../selectors';
import { pokemons, pokemonsArr } from '__fixtures__/pokemons';

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
      expect(getPokemons(initialState)).toEqual({ pokemons: pokemonsArr });
    });
  });
});
