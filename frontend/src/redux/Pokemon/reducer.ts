import { ActionType, getType } from 'typesafe-actions';
import { AnyAction } from 'redux';

import { fetchPokemonsSuccess } from './actions';
import { PokemonType } from './types';

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess>;

export type PokemonState = Readonly<Record<string, PokemonType>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return {
        ...state,
        ...typedAction.payload,
      };
    default:
      return state;
  }
};

export default reducer;
