import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import { RootState } from '../../redux/types';
import { fetchPokemonsSuccess } from '../../redux/Pokemon';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';

const withDataFetchingHome = withDataFetching(
  'pokemons',
  (props: RouteComponentProps<{ page?: string }>) =>
    makeGetRequest(`/pokemon${props.match.params.page ? `?page=${props.match.params.page}` : ''}`),
)(Home);

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

export default connect(
  mapStateToProps,
  { fetchPokemonsSuccess },
)(withDataFetchingHome);
