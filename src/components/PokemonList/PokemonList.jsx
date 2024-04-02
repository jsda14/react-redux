import { PokemonCard } from "../PokemonCard/PokemonCard";
import './styles/PokemonList.css';

function PokemonList({ pokemons }){
	return(
		<div className="PokemonList">
			{pokemons.map((pokemon, index) => (
				<PokemonCard 
					key={index} 
					pokemon={pokemon} 
					image={pokemon.sprites.front_default}
					abilities={typesName(pokemon.types)}/>
			))}
		</div>
	)
}

function typesName(types){
	return types.map(element => element.type.name).join(', ');
}

export { PokemonList }

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
}