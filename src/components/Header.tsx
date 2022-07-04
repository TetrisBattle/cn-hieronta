import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Box } from '@mui/material'
import Logo from 'images/Logo.png'

export default function Header() {
	const pages = ['Etusivu', 'Hinnasto']

	return (
		<AppBar
			sx={{
				bgcolor: 'unset',
				boxShadow: 'none',
			}}
		>
			<Box sx={{
				mx: 'auto',
				'& img': {
					width: {
						xs: 320,
						sm: 400,
						md: 500,
						lg: 600,
						xl: 700,
					}
				}
			}}>
				<img src={Logo} alt="CN hierontapalvelut" loading='lazy' />
			</Box>
			<Toolbar sx={{
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
			}}>
				{pages.map((page) => (
					<Button
						key={page}
						component={Link}
						to={`/${page}`}
						variant='text'
					>
						{page}
					</Button>
				))}
				<Button
					variant='text'
					href='https://vello.fi/cn-hierontapalvelut/'
					target='_blank'
				>
					Varaa aika
				</Button>
			</Toolbar>
		</AppBar>
	)
}
