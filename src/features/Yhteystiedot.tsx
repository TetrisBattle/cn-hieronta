import { Box, Typography, useTheme } from '@mui/material'
import maps from 'assets/google_maps.png'
import { useStore } from 'hooks/useStore'

export const Yhteystiedot = () => {
	const { appStore } = useStore()
	const theme = useTheme()

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				[theme.breakpoints.down('lg')]: {
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
				style={{ width: '50vw', height: 'auto', padding: 32 }}
			/>
			<Box
				sx={{
					mx: 'auto',
					p: 3,
					' .MuiTypography-root': {
						fontSize: (theme) => theme.typography.pxToRem(20),
					},
				}}
			>
				<Typography>{appStore.address}</Typography>
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
