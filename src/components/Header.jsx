import { useContext } from 'react'
import { StoreContext } from 'providers/StoreProvider'
import { observer } from 'mobx-react-lite';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from 'images/svg/Logo.svg'

import {
	AppBar,
	Typography,
	Box,
	Button,
} from '@mui/material'

const Header = observer(() => {
	const { pages, activePage, setActivePage } = useContext(StoreContext)

	const getButtons = () => (
		pages.map((page) => {
			return <Button
				key={page.path}
				onClick={() => setActivePage(page.path)}
				sx={{
					boxShadow: 'none',
					'& a': {
						color: (theme) => activePage === page.path
							? theme.palette.primary.contrastText
							: theme.palette.text.mediumEmphasis,
					}
				}}>
				<Link to={page.path}>{page.title}</Link>
			</Button>
		})
	)

	return (
		<AppBar>
			<Logo />
			<Typography component='h1'>Rentolihas</Typography>
			<Box className='buttons'>
				{getButtons()}
			</Box>
		</AppBar>
	)
})
export default Header
