import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from 'components/Header'
import Etusivu from 'pages/Etusivu'
import Palvelut from 'pages/Palvelut'
import Footer from 'components/Footer'
import 'styles/sass/main.css'

export default function App() {
	return (
		<Router>
			<Header />
				<Routes>
					<Route path="/" element={<Navigate replace to="/Etusivu" />} />
					<Route path='/Etusivu' element={<Etusivu />} />
					<Route path='/Palvelut' element={<Palvelut />} />
				</Routes>
			<Footer />
		</Router>
	)
}
