import axios from "axios";

function getPokemon (){
	return axios
	.get('https://pokeapi.co/api/v2/pokemon?limit=152')
	.then( resp =>  resp.data.results)
	.catch( err => alert(err))
}

function getPokemonDetails(pokemon){
	return axios.get(pokemon.url)
	.then(res => res.data)
	.catch( err => alert(err))
}
export { getPokemon, getPokemonDetails }