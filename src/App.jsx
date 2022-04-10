import { useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import { Box } from '@mui/material'
import { StoreContext } from 'providers/StoreProvider'

export default function App() {
	const { pages } = useContext(StoreContext)

	const getRoutes = () => (
		pages.map(({ path, element }) => (
			<Route key={path} exact path={path} element={element} />
		))
	)
	return (
		<Box height={'100vh'} display={'flex'} flexDirection={'column'}>
			<Header pages={pages} />
			<Box sx={{ height: '100%', overflow: 'auto' }}>
				<Routes>
					<Route exact path='/' element={<Home />} />
					{getRoutes()}
				</Routes>
			</Box>
			<Footer />
		</Box>
	)
}
