import { RouteComponentProps } from 'react-router-dom';

import { RootState } from 'redux/types';

export const getPokemon = (state: RootState, ownProps: RouteComponentProps<{ id: string }>) => ({
  pokemon: state.pokemon[ownProps.match.params.id],
});
export const getPokemons = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});
