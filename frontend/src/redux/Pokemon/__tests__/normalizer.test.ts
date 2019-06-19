import { normalize } from 'services/PokemonNormalizer';
import { pokemons, pokemonsArr } from '__fixtures__/pokemons';

describe('Pokemon normalizer', () => {
  it('Should cast an array to an object using pokemon ids as keys', () => {
    expect(normalize(pokemonsArr)).toEqual(pokemons);
  });

  it('Should return an empty object given an empty array', () => {
    expect(normalize([])).toEqual({});
  });
});
