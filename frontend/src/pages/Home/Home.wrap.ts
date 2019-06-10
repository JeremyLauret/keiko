import { RouteComponentProps } from 'react-router-dom';

import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';

export default withDataFetching('pokemons', (props: RouteComponentProps<{ page?: string }>) =>
  makeGetRequest(`/pokemon${props.match.params.page ? `?page=${props.match.params.page}` : ''}`),
);
