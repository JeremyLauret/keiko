import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import { makeGetRequest } from 'services/networking/request';

import {
  fetchPokemonRequested,
  fetchPokemonSuccess,
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
} from '../actions';
import pokemonSaga, { fetchPokemon, fetchPokemons } from '../sagas';
import { cloyster, pokemons, pokemonsArr } from '__fixtures__/pokemons';

const fetchPokemonRequestedAction = fetchPokemonRequested('91');
const fetchPokemonsRequestedAction = fetchPokemonsRequested('1');

describe('[Saga] Pokemon redux', () => {
  describe('fetchPokemon', () => {
    describe('when request is a success', () => {
      it('should call the fetch pokemon success action when request is a success', async () => {
        return expectSaga(fetchPokemon, fetchPokemonRequestedAction)
          .provide([[matchers.call.fn(makeGetRequest), { body: cloyster }]])
          .put(fetchPokemonSuccess(cloyster))
          .run();
      });
    });
  });

  describe('fetchPokemons', () => {
    describe('when request is a success', () => {
      it('should call the fetch pokemons success action when request is a success', async () => {
        return expectSaga(fetchPokemons, fetchPokemonsRequestedAction)
          .provide([[matchers.call.fn(makeGetRequest), { body: pokemonsArr }]])
          .put(fetchPokemonsSuccess(pokemons))
          .run();
      });
    });
  });
});
