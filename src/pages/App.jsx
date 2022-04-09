import { useState } from 'react'
import Header from '../components/Header'
import Etusivu from './Etusivu'
import Palvelut from './Palvelut'
import Yhteystiedot from './Yhteystiedot'

export default function App() {
	const pages = [
		'Etusivu',
		'Palvelut',
		'Yhteystiedot',
	]
	
	const [selectedPage, setSelectedPage] = useState(pages[2])
	
	const getContent = () => {
		switch (selectedPage) {
			case 'Etusivu':
				return <Etusivu />
			case 'Palvelut':
				return <Palvelut />
			case 'Yhteystiedot':
				return <Yhteystiedot />
			default:
				return <Etusivu />
		}
	}
	
	return (
		<div>
			<Header
				pages={pages}
				selectedPage={selectedPage} 
				setSelectedPage={setSelectedPage} 
			/>
			{getContent()}
		</div>
	)
}
