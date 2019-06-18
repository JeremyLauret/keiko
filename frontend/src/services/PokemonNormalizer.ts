import { PokemonType } from '../pages/Home';

function reducer(previousValue: Record<number, PokemonType>, pokemon: PokemonType) {
  previousValue[pokemon.id] = pokemon;
  return previousValue;
}

export const normalize = (arr: PokemonType[]) => arr.reduce(reducer, {});
