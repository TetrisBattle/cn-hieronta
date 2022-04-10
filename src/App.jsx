import { useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import { Stack } from '@mui/material'
import { StoreContext } from 'providers/StoreProvider'

export default function App() {
	const { pages } = useContext(StoreContext)

	const getRoutes = () => (
		pages.map(({ path, element }) => (
			<Route key={path} exact path={path} element={element} />
		))
	)
	return (
		<Stack display='flex' minHeight='100vh'>
			<Header />
			<Stack sx={{ minHeight: '100%' }}>
				<Routes>
					<Route exact path='/' element={<Home />} />
					{getRoutes()}
				</Routes>
			</Stack>
			<Footer />
		</Stack>
	)
}
