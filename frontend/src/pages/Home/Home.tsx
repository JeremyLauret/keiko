import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Style from './Home.style';
import Pokemon from 'components/Pokemon';
import { PokemonType, PokemonAction } from '../../redux/Pokemon';

interface Props {
  pokemons: PokemonType[];
  fetchPokemonsSuccess(pokemons: PokemonType | {}): PokemonAction;
}

const Home = (props: Props & RouteComponentProps<{ page?: string }>) => {
  props.fetchPokemonsSuccess({}); // Dispatch successful data fetching action.
  return (
    <Style.Pokedex>
      <h1 className="pokedex-title">Pokedex</h1>
      <nav className="nav">
        {props.match.params.page && +props.match.params.page > 1 && (
          <Link className="arrow" to={`/pokedex/${+props.match.params.page - 1}`}>
            &lt;
          </Link>
        )}
        {(!props.match.params.page || +props.match.params.page < 6) && (
          <Link
            className="arrow arrow-right"
            to={`/pokedex/${props.match.params.page ? +props.match.params.page + 1 : 2}`}
          >
            &gt;
          </Link>
        )}
      </nav>
      <div className="pokedex-grid">
        {props.pokemons.map(item => (
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
};

export default Home;
