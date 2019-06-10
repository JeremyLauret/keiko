import * as React from 'react';

import { makeGetRequest } from 'services/networking/request';
import Style from './withDataFetching.style';

const withDataFetching = (dataName: string, fetchFunction: Function) => <T extends {}>(
  BaseComponent: React.ComponentType<T & { [dataName: string]: object | object[] }>,
) => (props: T) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState<{ [dataName: string]: object | object[] } | null>(null);

  React.useEffect(
    () => {
      async function fetchData() {
        try {
          let response = await fetchFunction(props);
          setData({ [dataName]: response.body });
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    },
    [props], // Re-render when props change.
  );

  return (
    <Style.DataFetching>
      {loading && <img src={`${process.env.PUBLIC_URL}/loader.svg`} alt="Loader" />}
      {error && <p className="error-message">Something wrong happened. Send help.</p>}
      {!loading && !error && <BaseComponent {...props} {...data} />}
    </Style.DataFetching>
  );
};

export default withDataFetching;
