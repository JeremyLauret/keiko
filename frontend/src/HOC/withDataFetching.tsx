import * as React from 'react';

import Style from './withDataFetching.style';

const withDataFetching = (fetchActionDispatcher: Function) => (
  BaseComponent: React.ComponentType<any>,
) => (props: any) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(
    () => {
      fetchActionDispatcher(props);
      setLoading(false);
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
