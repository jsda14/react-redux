// NUESTRO ACTIONS CREATOR FUNCION QUE RETORNA UN ACTION, ES DECIR UN OBJETO QUE DESCRIBE EL CAMBIO QUE VA A PASAR
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({ // payload nuevos pokemones
	type: SET_POKEMONS,
	payload
})