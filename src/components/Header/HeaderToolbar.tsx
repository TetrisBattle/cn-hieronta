import { Box, Button, Toolbar, useTheme } from '@mui/material'
import { RouteOption } from 'App/Routes'
import { useStore } from 'hooks/useStore'
import { NavLink } from 'react-router-dom'

type LinkButtonProps = {
	route: RouteOption
	children: React.ReactNode
}

export const HeaderToolbar = () => {
	const { appStore } = useStore()
	const theme = useTheme()

	const LinkButton = ({ route, children }: LinkButtonProps) => {
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
					fontSize: (theme) => theme.typography.pxToRem(20),
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
						fontWeight: (theme) => theme.typography.fontWeightBold,
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
					href={appStore.ajanvarausLinkki}
					target='_blank'
					sx={{
						minWidth: 'max-content',
						color: 'inherit',
					}}
				>
					Varaa aika
				</Button>
			</Box>
		</Toolbar>
	)
}
