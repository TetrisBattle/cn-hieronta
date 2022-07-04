import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material'
import Logo from 'images/Logo.png'

export default function Header() {
	const pages = ['Etusivu', 'Hinnasto', 'Varaa aika']

	return (
		<AppBar
			sx={{
				backgroundImage: 'unset',
				backgroundColor: '#fff',
				color: '#000'
			}}
		>
			<Box px={80}>
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
				<Box className='navButtons' sx={{ display: 'flex', gap: 3 }}>
					{pages.map((page) => (
						<Button
							key={page}
							component={Link}
							to={`/${page}`}
							variant='text'
							disableRipple
							sx={{
								backgroundColor: 'transparent',
								fontSize: '1.75rem',
							}}
						>
							{page}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}
