import { AppBar, Box, Typography } from '@mui/material'
import backgroundImg from 'assets/camtu/camtu_massaging_background.jpg'
import ContactInfoBar from './ContactInfoBar'
import HeaderToolbar from './HeaderToolbar'
import { pxToRem } from 'utility/fontHandler'

export default function Header() {
	return (
		<AppBar sx={{ bgcolor: 'unset', boxShadow: 'none' }}>
			<Box
				id='backgroundImg'
				sx={{
					backgroundImage: `url(${backgroundImg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center ',
					width: 1,
					height: 240,
					color: (theme) => theme.palette.primary.main,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<ContactInfoBar />
				<Box
					sx={{
						height: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						variant='h1'
						sx={{
							fontSize: pxToRem(32),
						}}
					>
						<Typography component='span' fontSize={pxToRem(48)}>
							CN
						</Typography>
						&nbsp;Hierontapalvelut
					</Typography>
				</Box>
			</Box>
			<HeaderToolbar />
		</AppBar>
	)
}
