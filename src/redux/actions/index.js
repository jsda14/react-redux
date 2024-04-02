// NUESTRO ACTIONS CREATOR FUNCION QUE RETORNA UN ACTION, ES DECIR UN OBJETO QUE DESCRIBE EL CAMBIO QUE VA A PASAR
import { getPokemonDetails } from "../../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({ // payload nuevos pokemones
	type: SET_POKEMONS,
	payload
})

export const setLoading = (payload) => ({
	type: SET_LOADING,
	payload
})

export const setFavorite = (payload) => ({
	type: SET_FAVORITE,
	payload
})

export const getPokemonsWithDetails =
	(pokemons = []) =>
		async (dispatch) => { //Esta función debe retornar una función que recibe un dispatch
			const pokemonDetail = await Promise.all(
				pokemons.map(pokemon => getPokemonDetails(pokemon))
			);

			dispatch(setPokemons(pokemonDetail));
		};