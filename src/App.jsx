import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { PokemonList } from './components/PokemonList/PokemonList';
import { Searcher } from './components/Searcher/Searcher';
import { getPokemon } from './api';
import { setPokemons as setPokemosActions } from './redux/actions';

import logo from './static/logo.svg';
import './App.css';

function App({pokemons, setPokemons}) {

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonResp = await getPokemon();
      setPokemons(pokemonResp);
    }
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
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

/**
 * mapStateToProps, función que recibe nuestro estado y retorna un objeto cuyas propiedades serán enviadas a los props del componente conectado a Redux
 */
const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

/**
 * mapDispatchToProps, función que se encarga de recibir el dispacher de Redux, además retorna un objeto que será mapeado a las propiedades pero con los actioncs creators
 */
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value)=> dispatch(setPokemosActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
