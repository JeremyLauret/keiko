import * as React from 'react';

import Style from './withDataFetching.style';

const withDataFetching = (fetchActionDispatcher: Function) => (
  BaseComponent: React.ComponentType<any>,
) => (props: any) => {
  React.useEffect(
    () => {
      fetchActionDispatcher(props);
    },
    [props.match.params], // Re-render when URL parameters change.
  );

  return (
    <Style.DataFetching>
      <BaseComponent {...props} />
    </Style.DataFetching>
  );
};

export default withDataFetching;
