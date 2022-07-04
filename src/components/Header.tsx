import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material'
import Logo from 'images/Logo.png'

export default function Header() {
	const pages = ['Etusivu', 'Hinnasto']

	return (
		<AppBar
			sx={{
				backgroundImage: 'unset',
				backgroundColor: '#fff',
				color: '#000'
			}}
		>
			<Box px={'30vw'}>
				<img src={Logo} alt="CN hierontapalvelut" width='100%' />
			</Box>
			{/* <Typography
				variant='h1'
				sx={{
					p: 2.5,
					textAlign: 'center',
					fontSize: 'clamp(1.75rem, 5.3vw, 6rem)',
					fontWeight: 700,
					fontFamily: 'Cinzel Decorative',
					wordSpacing: '1ch',
				}}
			>
				CN Hierontapalvelut
			</Typography> */}
			<Toolbar sx={{ borderTop: 'solid black 4px', display: 'flex', justifyContent: 'center' }}>
				<Box sx={{
					display: 'flex',
					gap: 3,
					'& .MuiButton-root': {
						xs: { 	fontSize: '1rem' },
						sm: { fontSize: '1.25rem' },
					}
				}}>
					{pages.map((page) => (
						<Button
							key={page}
							component={Link}
							to={`/${page}`}
							variant='text'
							disableRipple
						>
							{page}
						</Button>
					))}
					<Button
						variant='text'
						disableRipple
						href='https://vello.fi/cn-hierontapalvelut/'
						target='_blank'
					>
						Varaa aika
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}
