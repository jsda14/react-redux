import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function PokemonCard({ pokemon }) {
	return (
		<>
			<h1> HOLA </h1>
			<Card
				title={pokemon.name}
				cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto" />}
				extra={<StarOutlined />}
			>
				<Meta description='fire, magic' />
			</Card>
		</>
	)
}

export { PokemonCard };