import { Box, Link, Typography, useTheme } from '@mui/material'

function Summary() {
	const theme = useTheme()

	return (
		<Box
			sx={{
				p: 3,
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				' .MuiBox-root .MuiTypography-root:not(a)': {
					fontSize: '1.25rem',
				},
			}}
		>
			<Typography sx={{ fontSize: '2rem' }}>
				Hierontaa Oulun keskustassa
			</Typography>

			<Box>
				<Typography>
					Ammattilaisen apua lihaskireyksiin tai rentoutumiseen.
				</Typography>
				<Typography>
					Monipuolisia hoitokeinoja ja kehon hyvinvointia.
				</Typography>
			</Box>

			<Box>
				<Typography>
					Toimitila sijaitsee Pataässän vieressä osoitteessa
					Pakkahuoneenkatu 5 B 17, 90100 Oulu.
				</Typography>
				<Typography>Sisäänpääsy summeria soittamalla.</Typography>
				<Typography>
					Siirry ajanvaraus kalenteriin&nbsp;
					<Link
						href='https://vello.fi/cnhierontapalvelut'
						target='_blank'
						color={theme.palette.text.primary}
						fontWeight={theme.typography.fontWeightBold}
						fontSize='1.5rem'
					>
						tästä
					</Link>
				</Typography>
			</Box>
		</Box>
	)
}

export default Summary
