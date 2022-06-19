import { Link } from 'react-router-dom'
import {
	AppBar,
	Toolbar,
	Button,
	MenuItem,
	Typography,
	Box,
	useTheme,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuButton from './MenuButton'

export default function Header() {
	const theme = useTheme()
	const pages = ['Etusivu', 'Hinnasto']

	return (
		<AppBar
			sx={{
				backgroundImage: 'unset',
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Toolbar>
				<Typography
					variant='h1'
					sx={{
						flexGrow: 1,
						fontSize: '1.75rem',
						fontWeight: 600,
						[theme.breakpoints.up('sm')]: {
							fontSize: '2.25rem',
						},
						[theme.breakpoints.up('lg')]: {
							fontSize: '3rem',
						},
					}}
				>
					CN Hierontapalvelut
				</Typography>
				<Box className='navButtons'>
					{pages.map((page) => (
						<Button key={page} component={Link} to={`/${page}`} variant='text'>
							{page}
						</Button>
					))}
				</Box>
				<MenuButton icon={<MenuIcon />} className='menuIcon'>
					{pages.map((page) => (
						<MenuItem key={page} component={Link} to={`/${page}`}>
							{page}
						</MenuItem>
					))}
				</MenuButton>
			</Toolbar>
		</AppBar>
	)
}
