import { Button } from '@mui/material'
import { RouteOption, routeToTitle } from 'AppRoutes'
import { NavLink } from 'react-router-dom'

interface HeaderButtonProps {
	route: RouteOption
}

export default function HeaderButton({ route }: HeaderButtonProps) {
	return (
		<Button component={NavLink} to={route} variant='text'>
			{routeToTitle(route)}
		</Button>
	)
}
