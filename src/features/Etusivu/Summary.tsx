import { Box, Link, Typography, useTheme } from '@mui/material'

export const Summary = () => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				p: 3,
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
			}}
		>
			<Typography
				sx={{
					fontSize: (theme) => theme.typography.pxToRem(20),
					fontWeight: theme.typography.fontWeightBold,
				}}
			>
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
						href='https://booksalon.fi/cn-hierontapalvelut'
						target='_blank'
						color={theme.palette.text.primary}
						fontWeight={theme.typography.fontWeightBold}
					>
						tästä.
					</Link>
				</Typography>
			</Box>
		</Box>
	)
}
