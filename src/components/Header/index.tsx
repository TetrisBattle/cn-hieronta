import { AppBar, Box, Typography, useMediaQuery } from '@mui/material'
import backgroundImg from 'assets/camtu/camtu_massaging_background.jpg'
import { ContactInfoBar } from './ContactInfoBar'
import { HeaderToolbar } from './HeaderToolbar'
import { HeaderMenu } from './HeaderMenu'

const DesktopView = () => {
	return (
		<AppBar sx={{ boxShadow: 'none' }}>
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
							fontSize: (theme) => theme.typography.pxToRem(32),
							fontWeight: (theme) =>
								theme.typography.fontWeightRegular,
						}}
					>
						<Typography
							component='span'
							sx={{
								fontSize: (theme) =>
									theme.typography.pxToRem(48),
							}}
						>
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

const MobileView = () => {
	return (
		<AppBar
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				position: 'sticky',
				top: 0,
				zIndex: (theme) => theme.zIndex.drawer,
				backgroundImage: `url(${backgroundImg})`,
				color: (theme) => theme.palette.primary.main,
				backgroundSize: 'cover',
			}}
		>
			<Typography
				variant='h1'
				sx={{
					px: 1,
					fontSize: (theme) => theme.typography.pxToRem(24),
					fontWeight: (theme) => theme.typography.fontWeightRegular,
				}}
			>
				<Typography
					component='span'
					sx={{
						fontSize: (theme) => theme.typography.pxToRem(32),
					}}
				>
					CN
				</Typography>
				&nbsp;Hierontapalvelut
			</Typography>
			<HeaderMenu />
		</AppBar>
	)
}

export const Header = () => {
	const isMobile = useMediaQuery('(max-width: 700px)')
	return isMobile ? <MobileView /> : <DesktopView />
}
