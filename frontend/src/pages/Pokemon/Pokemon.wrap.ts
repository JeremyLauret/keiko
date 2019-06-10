import { RouteComponentProps } from 'react-router-dom';

import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';

export default withDataFetching('pokemon', (props: RouteComponentProps<{ id: string }>) =>
  makeGetRequest(`/pokemon/${props.match.params.id}`),
);
