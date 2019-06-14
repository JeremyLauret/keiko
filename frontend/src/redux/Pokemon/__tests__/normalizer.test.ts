import { normalize } from 'services/PokemonNormalizer';

const pokemons = [
  { id: 91, name: 'cloyster', height: 15, weight: 1325 },
  { id: 92, name: 'gastly', height: 13, weight: 1 },
];

describe('Pokemon normalizer', () => {
  it('should cast the array to an object using pokemon ids as keys', () => {
    const expectedState = {
      91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
      92: { id: 92, name: 'gastly', height: 13, weight: 1 },
    };
    expect(normalize(pokemons)).toEqual(expectedState);
  });
});
