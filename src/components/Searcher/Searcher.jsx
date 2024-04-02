import { Input } from 'antd';

function Searcher() {
	return(
		<Input.Search 
			style={{marginBottom: 10}}
			placeholder='Buscar...'	
		/>
	)
}

export { Searcher };