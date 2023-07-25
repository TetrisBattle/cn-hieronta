import { AppBar, Box, Typography } from '@mui/material'
import backgroundImg from 'assets/camtu/camtu_massaging_background.jpg'
import ContactInfoBar from './ContactInfoBar'
import HeaderToolbar from './HeaderToolbar'
import { pxToRem } from 'utility/fontHandler'
import { useEffect, useRef } from 'react'
import { useStore } from 'contexts/StoreContext'
import { useHeightObserver } from 'hooks/useHeightObserver'

export default function Header() {
	const { appStore } = useStore()
	const headerRef = useRef<HTMLDivElement | null>(null)
	const headerHeight = useHeightObserver(headerRef)

	useEffect(() => {
		appStore.setHeaderHeight(headerHeight)
	}, [appStore, headerHeight])

	return (
		<AppBar ref={headerRef} sx={{ bgcolor: 'unset', boxShadow: 'none' }}>
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
