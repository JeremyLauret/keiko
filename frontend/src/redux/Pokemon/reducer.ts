import { ActionType } from 'typesafe-actions';
import { AnyAction } from 'redux';

import { fetchPokemonsSuccess } from './actions';
import { PokemonType } from './types';

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess>;

export type PokemonState = Readonly<Record<string, PokemonType>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
