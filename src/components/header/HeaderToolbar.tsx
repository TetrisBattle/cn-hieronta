import { Box, Button, Toolbar, useTheme } from '@mui/material'
import { RouteOption } from 'AppRoutes'
import { NavLink } from 'react-router-dom'
import { pxToRem } from 'utility/fontHandler'

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
					fontSize: pxToRem(20),
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
					href='https://booksalon.fi/cn-hierontapalvelut'
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
