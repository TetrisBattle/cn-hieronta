import { Box } from '@thng/react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Outlet } from 'react-router-dom'

export const Root = () => {
	return (
		<>
			<Box
				sx={{
					minHeight: '100dvh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Header />
				<Box sx={{ flexGrow: 1 }}>
					<Outlet />
				</Box>
				<Footer />
			</Box>
		</>
	)
}
