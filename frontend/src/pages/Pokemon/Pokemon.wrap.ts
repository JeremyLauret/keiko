import { RouteComponentProps } from 'react-router-dom';

import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';
import Pokemon from './Pokemon';

export default withDataFetching('pokemon', (props: RouteComponentProps<{ id: string }>) =>
  makeGetRequest(`/pokemon/${props.match.params.id}`),
)(Pokemon);
