import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material'

export default function Header() {
	const pages = ['Etusivu', 'Hinnasto']

	return (
		<AppBar
			sx={{
				backgroundImage: 'unset',
				backgroundColor: '#121212',
			}}
		>
			<Toolbar sx={{ p: 2 }}>
				<Box className='navButtons' sx={{ ml: 'auto', pr: 2 }}>
					{pages.map((page) => (
						<Button
							key={page}
							component={Link}
							to={`/${page}`}
							variant='text'
							disableRipple
							sx={{
								color: 'inherit',
								backgroundColor: 'transparent',
								fontSize: '1.375rem',
							}}
						>
							{page}
						</Button>
					))}
				</Box>
			</Toolbar>
			<Typography
				variant='h1'
				sx={{
					bgcolor: '#fff',
					color: 'black',
					p: 2.5,
					textAlign: 'center',
					fontSize: 'clamp(1.75rem, 5.3vw, 3.5rem)',
					fontWeight: 700,
					fontFamily: 'Cinzel Decorative',
					wordSpacing: '1ch',
				}}
			>
				CN Hierontapalvelut
			</Typography>
		</AppBar>
	)
}
