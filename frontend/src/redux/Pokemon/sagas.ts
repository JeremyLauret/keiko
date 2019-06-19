import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { makeGetRequest } from 'services/networking/request';
import { normalize } from '../../services/PokemonNormalizer';
import {
  fetchPokemonsSuccess,
  fetchPokemonsRequested,
  fetchPokemonSuccess,
  fetchPokemonRequested,
} from './actions';

function* fetchPokemons(action: ActionType<typeof fetchPokemonsRequested>) {
  const response = yield call(makeGetRequest, `/pokemon?page=${action.payload}`);
  yield put(fetchPokemonsSuccess(normalize(response.body)));
}

function* fetchPokemon(action: ActionType<typeof fetchPokemonRequested>) {
  const response = yield call(makeGetRequest, `/pokemon/${action.payload}`);
  yield put(fetchPokemonSuccess(response.body));
}

export default function* pokemonSaga() {
  yield takeEvery('Pokemon/FETCH_POKEMONS_REQUESTED', fetchPokemons);
  yield takeEvery('Pokemon/FETCH_POKEMON_REQUESTED', fetchPokemon);
}
