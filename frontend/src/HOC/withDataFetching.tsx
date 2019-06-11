import * as React from 'react';

import Style from './withDataFetching.style';

const withDataFetching = (fetchFunction: Function, dispatchFunction: Function) => (
  BaseComponent: React.ComponentType<any>,
) => (props: any) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(
    () => {
      async function fetchData() {
        try {
          const response = await fetchFunction(props);
          dispatchFunction(props, response.body);
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    },
    [props.match.params], // Re-render when URL parameters change.
  );

  return (
    <Style.DataFetching>
      {loading && <img src={`${process.env.PUBLIC_URL}/loader.svg`} alt="Loader" />}
      {error && <p className="error-message">Something wrong happened. Send help.</p>}
      {!loading && !error && <BaseComponent {...props} />}
    </Style.DataFetching>
  );
};

export default withDataFetching;
