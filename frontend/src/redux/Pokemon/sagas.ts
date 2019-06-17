import { takeEvery } from 'redux-saga/effects';
import { PokemonAction } from './reducer';

function* fetchPokemons(action: PokemonAction) {
  console.log('I have been called!');
  yield 'hello';
}

export default function* pokemonSaga() {
  yield takeEvery('Pokemon/FETCH_POKEMONS_REQUESTED', fetchPokemons);
}
