import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Style from './Home.style';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from 'services/networking/request';

function Home(props: RouteComponentProps<{ page: string }>) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pokemons, setPokemons] = React.useState<
    {
      id: number;
      name: string;
      height: number;
      weight: number;
    }[]
  >([]);

  React.useEffect(() => {
    async function fillGrid() {
      try {
        let response = await makeGetRequest(
          `/pokemon${props.match.params.page ? `?page=${props.match.params.page}` : ''}`,
        );
        setPokemons(response.body);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fillGrid();
  }, []); // The empty array disables re-rendering after update.

  return (
    <Style.Pokedex>
      <h1 className="pokedex-title">Pokedex</h1>
      {loading && <img src={`${process.env.PUBLIC_URL}/loader.svg`} alt="Loader" />}
      {error && <p className="error-message">Something wrong happened. Send help.</p>}
      <div className="pokedex-grid">
        {pokemons.map(item => (
          <Pokemon
            name={item.name}
            id={item.id}
            height={item.height}
            weight={item.weight}
            key={item.id}
          />
        ))}
      </div>
    </Style.Pokedex>
  );
}

export default Home;
