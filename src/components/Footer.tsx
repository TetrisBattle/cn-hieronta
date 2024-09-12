import { Box, Link, Typography, useTheme } from '@mui/material'
import { contactInfoBoxStyle } from './Header/contactInfoBoxStyle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import edenred from 'assets/payments/edenred.webp'
import smartum from 'assets/payments/smartum.png'
import epassi from 'assets/payments/epassi.webp'

export const Footer = () => {
	const theme = useTheme()

	return (
		<Box component={'footer'} sx={{ mt: 'auto' }}>
			<Box
				sx={{
					bgcolor: (theme) => theme.palette.primary.main,
					p: 1,
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					[theme.breakpoints.down('sm')]: {
						flexDirection: 'column',
						gap: 1,
					},
				}}
			>
				<img src={edenred} alt='Edenred' height={40} />
				<img
					src={smartum}
					alt='Smartum'
					height={24}
					style={{ alignSelf: 'center' }}
				/>
				<img
					src={epassi}
					alt='epassi'
					height={34}
					style={{ paddingBottom: 4 }}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
					bgcolor: 'rgba(0,0,0,0.85)',
					color: (theme) => theme.palette.primary.main,
					p: 1,
					[theme.breakpoints.down('md')]: {
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
					},
					[theme.breakpoints.down('sm')]: {
						'[data-testid=LocationOnIcon]': {
							display: 'none',
						},
						'[data-testid=LocationOnIcon] + .MuiTypography-root': {
							maxWidth: '24ch',
						},
					},
				}}
			>
				<Box sx={contactInfoBoxStyle}>
					<LocationOnIcon />
					<Typography>Harjapäänkatu 33, 90400 Oulu</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<Link
						href='https://www.facebook.com/profile.php?id=100091451956031'
						target='_blank'
						sx={contactInfoBoxStyle}
					>
						<FacebookIcon />
					</Link>
					<Link
						href='https://www.instagram.com/CNhierontapalvelut/'
						target='_blank'
						underline='none'
						sx={contactInfoBoxStyle}
					>
						<InstagramIcon />
						<Typography>CNhierontapalvelut</Typography>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}
