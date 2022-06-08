import { Link } from "react-router-dom"
import { useState } from "react"
import { MenuItem } from '@mui/material'
import MuiMenu from 'components/MuiMenu'

export default function Header() {
	const [currentPage, setCurrentPage] = useState(window.location.pathname)

	interface INavLink { page: string }
	const NavLink = ({ page }: INavLink) => {
		return (
			<Link
				to={`/${page}`}
				onClick={() => setCurrentPage(`/${page}`)}
				data-current-page={currentPage === `/${page}` || currentPage === '/' ? 'true' : null }
			>{page}</Link>
		)
	}

	return (
		<header>
			<h1>Hierontapiste</h1>

			<nav>
				<NavLink page='Etusivu' />
				<NavLink page='Hinnastot' />
			</nav>

			<MuiMenu>
				<MenuItem>
					<NavLink page='Etusivu' />
				</MenuItem>
				<MenuItem>
					<NavLink page='Hinnastot' />
				</MenuItem>
			</MuiMenu>
		</header>
	)
}
