import { Routes, Route, Navigate } from 'react-router-dom'
import Etusivu from 'features/Etusivu/Etusivu'
import Palvelut from 'features/Palvelut'
import Yhteystiedot from 'features/Yhteystiedot'
import Yritys from 'features/Yritys'

export enum RouteOption {
	Etusivu = '/etusivu',
	Palvelut = '/palvelut',
	Yhteystiedot = '/yhteystiedot',
	Yritys = '/yritys',
}

export default function AppRoutes() {
	return (
		<Routes>
			<Route path='*' element={<Navigate replace to='/' />} />
			<Route
				path='/'
				element={<Navigate replace to={RouteOption.Etusivu} />}
			/>
			<Route path={RouteOption.Etusivu} element={<Etusivu />} />
			<Route path={RouteOption.Palvelut} element={<Palvelut />} />
			<Route path={RouteOption.Yhteystiedot} element={<Yhteystiedot />} />
			<Route path={RouteOption.Yritys} element={<Yritys />} />
		</Routes>
	)
}
