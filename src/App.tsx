import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/header/Header'
import Footer from 'components/Footer'
import AppRoutes from 'AppRoutes'

export default function App() {
	return (
		<Router>
			<Header />
			<AppRoutes />
			<Footer />
		</Router>
	)
}
