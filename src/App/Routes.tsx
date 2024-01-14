import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Etusivu } from 'features/Etusivu/Etusivu'
import { Palvelut } from 'features/Palvelut'
import { Yhteystiedot } from 'features/Yhteystiedot'
import { Yritys } from 'features/Yritys'
import { Root } from 'App/Root'

export enum RouteOption {
	Etusivu = '/etusivu',
	Palvelut = '/palvelut',
	Yhteystiedot = '/yhteystiedot',
	Yritys = '/yritys',
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '*',
				element: <Navigate replace to={RouteOption.Etusivu} />,
			},
			{
				path: '/',
				element: <Navigate replace to={RouteOption.Etusivu} />,
			},
			{ path: RouteOption.Etusivu, element: <Etusivu /> },
			{ path: RouteOption.Palvelut, element: <Palvelut /> },
			{ path: RouteOption.Yhteystiedot, element: <Yhteystiedot /> },
			{ path: RouteOption.Yritys, element: <Yritys /> },
		],
	},
])

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
