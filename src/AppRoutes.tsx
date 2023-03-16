import { Routes, Route, Navigate } from 'react-router-dom'
import Etusivu from 'pages/Etusivu'
import Hinnasto from 'pages/Hinnasto'

export enum RouteOption {
	Etusivu = '/etusivu',
	Hinnasto = '/hinnasto',
}

export function routeToTitle(route: RouteOption): string {
	return route[1].toUpperCase() + route.slice(2)
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
			<Route path={RouteOption.Hinnasto} element={<Hinnasto />} />
		</Routes>
	)
}
