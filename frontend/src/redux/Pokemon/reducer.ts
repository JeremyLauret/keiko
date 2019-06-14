import { ActionType, getType } from 'typesafe-actions';
import { AnyAction } from 'redux';

import { fetchPokemonsSuccess, fetchPokemonSuccess } from './actions';
import { PokemonType } from '../../pages/Home';

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess | typeof fetchPokemonSuccess>;

export type PokemonState = Readonly<Record<string, PokemonType>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return typedAction.payload;
    case getType(fetchPokemonSuccess):
      return { ...state, [typedAction.payload.id]: typedAction.payload }; // Should not remove already fetched pokemons.
    default:
      return state;
  }
};

export default reducer;
