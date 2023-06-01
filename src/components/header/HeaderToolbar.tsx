import { Box, Button, Toolbar, useTheme } from '@mui/material'
import { RouteOption } from 'AppRoutes'
import { NavLink } from 'react-router-dom'

interface HeaderButtonProps {
	route: RouteOption
	children: React.ReactNode
}

function HeaderToolbar() {
	const theme = useTheme()

	function LinkButton({ route, children }: HeaderButtonProps) {
		return (
			<Button component={NavLink} to={route} variant='text'>
				{children}
			</Button>
		)
	}

	return (
		<Toolbar
			sx={{
				bgcolor: (theme) => theme.palette.primary.main,
				color: (theme) => theme.palette.primary.contrastText,
				'& .MuiButton-root': {
					color: 'inherit',
					fontWeight: (theme) => theme.typography.fontWeightMedium,
					fontSize: '1.5rem',
					'&:hover': {
						bgcolor: 'rgba(0,0,0,0.1)',
					},
				},
			}}
		>
			<Box
				sx={{
					width: 1,
					display: 'flex',
					flexWrap: 'wrap',
					'& .MuiButton-root': {
						flexGrow: 1,
					},
					[theme.breakpoints.down('sm')]: {
						flexDirection: 'column',
						'& .MuiButton-root': {
							py: 0,
							fontSize: '1.3rem',
						},
						'& .MuiButton-root:not(:last-of-type)': {
							fontSize: '1.25rem',
						},
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
				<Button
					variant='text'
					href='https://vello.fi/cnhierontapalvelut'
					target='_blank'
					sx={{
						minWidth: 'max-content',
						color: 'inherit',
						fontWeight: (theme) =>
							theme.typography.fontWeightBold + '!important',
					}}
				>
					Varaa aika
				</Button>
			</Box>
		</Toolbar>
	)
}

export default HeaderToolbar
