import { Box, Typography, useTheme } from '@mui/material'
import maps from 'assets/google_maps.png'
import { pxToRem } from 'utility/fontHandler'

function Yhteystiedot() {
	const theme = useTheme()

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				[theme.breakpoints.down(760)]: {
					flexDirection: 'column',
					img: {
						width: '100% !important',
						maxWidth: 480,
						flexShrink: 1,
					},
				},
			}}
		>
			<img
				src={maps}
				alt='GoogleMaps'
				style={{ width: '50vw', height: 'auto' }}
			/>
			<Box
				sx={{
					mx: 'auto',
					p: 3,
					' .MuiTypography-root': {
						fontSize: pxToRem(20),
					},
				}}
			>
				<Typography>
					Pakkahuoneenkatu 5 B 17, 90100 Oulu, 2. krs.
				</Typography>
				<Typography>Oven avaus ovisummerilla</Typography>
				<br />
				<Typography>Puhelinnumero: +358 451420611</Typography>
				<Typography>
					Sähköposti: cnhierontapalvelut@gmail.com
				</Typography>
			</Box>
		</Box>
	)
}

export default Yhteystiedot
