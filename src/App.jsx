import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { PokemonList } from './components/PokemonList/PokemonList';
import { Searcher } from './components/Searcher/Searcher';
import { getPokemonsWithDetails, setLoading } from './redux/actions';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import logo from './static/logo.svg';

function App() {

  const pokemons = useSelector(state => state.data.pokemons); //Recibe el estado y retorna el valor que quiero obtener del estado
  const loading  = useSelector(state=> state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPokemons() {
      dispatch(setLoading(true));
      const pokemonResp = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonResp));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      {loading ?
        (<Col>
          <Spin spinning size='large'/>
        </Col>)
          :
        (<PokemonList pokemons={pokemons}/>)
      }

    </div>
  );
}


export default App;
