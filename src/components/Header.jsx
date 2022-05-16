import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { useState } from "react"

export default function Header() {
	const [currentPage, setCurrentPage] = useState(window.location.pathname)

	return (
		<header>
			<h1>Rentolihas</h1>

			<nav>
        <Button
					variant="text"
					component={Link} to={'/Etusivu'}
					onClick={() => setCurrentPage('/Etusivu')}
					current-page={currentPage === '/Etusivu' ? 'true' : null }
				>Etusivu</Button>

        <Button
					variant="text"
					component={Link} to={'/Palvelut'}
					onClick={() => setCurrentPage('/Palvelut')}
					current-page={currentPage === '/Palvelut' ? 'true' : null }
				>Palvelut</Button>
			</nav>
		</header>
	)
}
