import { Link } from "react-router-dom"
import { ReactComponent as Logo } from 'images/svg/Logo.svg'
import { Button } from '@mui/material'
import { useState } from "react"

export default function Header() {
	const [currentPage, setCurrentPage] = useState(window.location.pathname)
	const colorHighLight = '#2dffff'

	return (
		<header>
			<Logo />

			<h1>Rentolihas</h1>

			<nav>
        <Button
					variant="text"
					component={Link} to={'/Etusivu'}
					onClick={() => setCurrentPage('/Etusivu')}
					style={{ color: currentPage === '/Etusivu' ? colorHighLight : 'inherit' }}
				>Etusivu</Button>

        <Button
					variant="text"
					component={Link} to={'/Palvelut'}
					onClick={() => setCurrentPage('/Palvelut')}
					style={{ color: currentPage === '/Palvelut' ? colorHighLight : 'inherit' }}
				>Palvelut</Button>
			</nav>
		</header>
	)
}
