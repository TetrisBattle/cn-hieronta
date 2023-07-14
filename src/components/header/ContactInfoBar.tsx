import { Box, Link, Typography, useTheme } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import InstagramIcon from '@mui/icons-material/Instagram'
import { pxToRem } from 'utility/fontHandler'

export const contactInfoBoxStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: 0.5,
	' .MuiTypography-root': {
		width: 'max-content',
	},
}

function ContactInfoBar() {
	const theme = useTheme()

	return (
		<Box
			sx={{
				bgcolor: 'rgba(0,0,0,0.6)',
				mt: 2,
				p: 1,
				display: 'flex',
				justifyContent: 'space-evenly',
				flexWrap: 'wrap',
				'& .MuiTypography-root': {
					fontSize: pxToRem(20),
				},
				[theme.breakpoints.down('md')]: {
					flexDirection: 'column',
					alignItems: 'center',
				},
			}}
		>
			<Box sx={contactInfoBoxStyle}>
				<PhoneIcon />
				<Typography>+358 451420611</Typography>
			</Box>
			<Box sx={contactInfoBoxStyle}>
				<Typography>cnhierontapalvelut@gmail.com</Typography>
			</Box>
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
	)
}

export default ContactInfoBar
