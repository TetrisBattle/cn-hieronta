import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import RootWrapper from 'components/RootWrapper'
import Etusivu from 'pages/Etusivu'
import Hinnasto from 'pages/Hinnasto'

export default function App() {
	return (
		<Router>
			<RootWrapper>
				<Routes>
					<Route path='/' element={<Navigate replace to='/Etusivu' />} />
					<Route path='/Etusivu' element={<Etusivu />} />
					<Route path='/Hinnasto' element={<Hinnasto />} />
				</Routes>
			</RootWrapper>
		</Router>
	)
}
