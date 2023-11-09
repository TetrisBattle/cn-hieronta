import { Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton, Link, MenuItem } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type LinkButtonProps = {
	route: RouteOption
	children: React.ReactNode
}

export const HeaderMenu = () => {
	const [open, setOpen] = useState(false)

	const toggleOpen = () => setOpen((prev) => !prev)

	const LinkButton = ({ route, children }: LinkButtonProps) => {
		return (
			<MenuItem
				component={NavLink}
				to={route}
				onClick={toggleOpen}
				sx={{
					'&.active': (theme) => ({
						fontWeight: theme.typography.fontWeightBold,
					}),
				}}
			>
				{children}
			</MenuItem>
		)
	}

	return (
		<>
			<IconButton
				onClick={toggleOpen}
				sx={{
					color: 'inherit',
				}}
			>
				<MenuIcon />
			</IconButton>

			<Drawer
				anchor='right'
				open={!!open}
				onClose={toggleOpen}
				sx={{
					'& .MuiDrawer-paper': {
						bgcolor: (theme) => theme.palette.primary.main,
						color: (theme) => theme.palette.primary.contrastText,
					},
				}}
			>
				<LinkButton route={RouteOption.Etusivu}>Etusivu</LinkButton>
				<LinkButton route={RouteOption.Palvelut}>
					Palvelut/Hinnasto
				</LinkButton>
				<LinkButton route={RouteOption.Yhteystiedot}>
					Yhteystiedot
				</LinkButton>
				<LinkButton route={RouteOption.Yritys}>Yritys</LinkButton>
				<MenuItem onClick={toggleOpen}>
					<Link
						href='https://booksalon.fi/cn-hierontapalvelut'
						target='_blank'
						sx={{
							color: (theme) =>
								theme.palette.primary.contrastText,
							textDecoration: 'none',
						}}
					>
						Varaa aika
					</Link>
				</MenuItem>
			</Drawer>
		</>
	)
}
