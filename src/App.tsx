import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/header/Header'
import Footer from 'components/Footer'
import AppRoutes from 'AppRoutes'
import { Box } from '@mui/material'

export default function App() {
	return (
		<Router>
			<Box
				sx={{
					minHeight: '100dvh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Header />
				<Box sx={{ flexGrow: 1 }}>
					<AppRoutes />
				</Box>
				<Footer />
			</Box>
		</Router>
	)
}
