import axios from "axios";

function getPokemons (){
	return axios
	.get('https://pokeapi.co/api/v2/pokemon?limit=152')
	.then( resp =>  resp.data.results)
	.catch( err => console.log(err))
}

export { getPokemons }