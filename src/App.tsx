import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from 'components/Header'
import Etusivu from 'pages/Etusivu'
import Hinnasto from 'pages/Hinnasto'
import Footer from 'components/Footer'
import 'styles/sass/main.css'

export default function App() {
	return (
		<Router>
			<Header />
				<Routes>
					<Route path="/" element={<Navigate replace to="/Etusivu" />} />
					<Route path='/Etusivu' element={<Etusivu />} />
					<Route path='/Hinnasto' element={<Hinnasto />} />
				</Routes>
			<Footer />
		</Router>
	)
}
