import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
	const [currentPage, setCurrentPage] = useState(window.location.pathname)

	return (
		<header>
			<h1>Hierontapiste</h1>

			<nav>
        <Link
					to='/Etusivu'
					onClick={() => setCurrentPage('/Etusivu')}
					data-current-page={currentPage === '/Etusivu' || currentPage === '/' ? 'true' : null }
				>Etusivu</Link>

        <Link
					to='/Palvelut'
					onClick={() => setCurrentPage('/Palvelut')}
					data-current-page={currentPage === '/Palvelut' ? 'true' : null }
				>Palvelut</Link>
			</nav>
		</header>
	)
}
