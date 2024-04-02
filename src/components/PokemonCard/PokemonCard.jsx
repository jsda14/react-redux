import { Card } from "antd";
import { StarButton } from "../StartButton/StartButton";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../redux/actions";

function PokemonCard ({pokemon, image, abilities,}){
	const dispatch = useDispatch();
	
	const handleOnFavorite = () => {
		dispatch(setFavorite(pokemon.id));
	}
	return(
		<Card
			title={pokemon.name}
			cover={<img src={image} alt={pokemon.name}/>}
			extra={<StarButton isFavorite={pokemon.favorite} onClick={()=> handleOnFavorite()}/>}
		>
			<Meta description={abilities}/>
		</Card>
	)
}

export { PokemonCard };
