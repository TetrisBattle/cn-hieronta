import { AppBar, Box, Typography } from '@mui/material'
import backgroundImg from 'assets/camtu/camtu_massaging_background.jpg'
import ContactInfoBar from './ContactInfoBar'
import HeaderToolbar from './HeaderToolbar'

export default function Header() {
	return (
		<AppBar sx={{ bgcolor: 'unset', boxShadow: 'none' }}>
			<Box
				sx={{
					backgroundImage: `url(${backgroundImg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center ',
					width: 1,
					height: 400,
					color: (theme) => theme.palette.primary.main,
				}}
			>
				<Box
					sx={{
						width: 1,
						height: 1,
						bgcolor: 'rgba(0,0,0,0.4)',
						position: 'relative',
					}}
				>
					<ContactInfoBar />
					<Typography
						variant='h1'
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							fontSize: '2rem',
						}}
					>
						<Typography component='span' fontSize={'4.5rem'}>
							CN
						</Typography>
						&nbsp;Hierontaplavelut
					</Typography>
				</Box>
			</Box>
			<HeaderToolbar />
		</AppBar>
	)
}
