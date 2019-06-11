import { connect } from 'react-redux';

import Home from './Home';
import { RootState } from '../../redux/types';

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

export default connect(mapStateToProps)(Home);
