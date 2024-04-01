import { PokemonCard } from "../PokemonCard/PokemonCard";
import './styles/PokemonList.css';

function PokemonList({ pokemons }){
	console.log('PPOKEMOS IN POKEMON LIST ', pokemons);
	return(
		<div className="PokemonList">
			{pokemons.map((pokemon, index) => (
				<PokemonCard key={index} pokemon={pokemon}/>
			))}
		</div>
	)
}

export { PokemonList }

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
}