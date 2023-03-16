import { AppBar, Toolbar, Button, Box } from '@mui/material'
import CnHierontapalvelut from 'images/CnHierontapalvelut.png'
import { RouteOption } from 'AppRoutes'
import HeaderButton from './HeaderButton'

export default function Header() {
	return (
		<AppBar sx={{ bgcolor: 'unset', boxShadow: 'none' }}>
			<Box
				sx={{
					mx: 'auto',
					'& img': {
						width: {
							xs: 320,
							sm: 400,
							md: 500,
							lg: 600,
							xl: 700,
						},
					},
				}}
			>
				<img
					src={CnHierontapalvelut}
					alt='CN hierontapalvelut'
					loading='lazy'
				/>
			</Box>
			<Toolbar
				sx={{
					borderTop: 'solid black 1px',
					borderBottom: 'solid black 1px',
					display: 'flex',
					justifyContent: 'center',
					gap: 3,
					'& .MuiButton-root': {
						fontSize: {
							xs: '1rem',
							sm: '1.25rem',
							xl: '1.5rem',
						},
					},
				}}
			>
				<HeaderButton route={RouteOption.Etusivu} />
				<HeaderButton route={RouteOption.Hinnasto} />
				<Button
					variant='text'
					href='https://vello.fi/cnhierontapalvelut'
					target='_blank'
				>
					Varaa aika
				</Button>
			</Toolbar>
		</AppBar>
	)
}
