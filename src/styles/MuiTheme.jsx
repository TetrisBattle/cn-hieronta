import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: red[900],
			light: red[700],
			dark: '#840000',
			contrastText: '#fff',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				sx: {
					fontWeight: 'bold',
					fontSize: '1rem'
				}
			},
			variants: [
				{
					props: {
						type: 'round',
					},
					style: {
						borderRadius: '99rem',
						width: 'fit-content'
					},
				},
			],
		},
		MuiAppBar: {
			defaultProps: {
				position: 'sticky',
				sx: {
					height: '4.5rem',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',

					'& > svg': {
						height: '4.5rem',
						width: '4.5rem'
					},
					'& > h1': {
						fontSize: '2rem',
						fontWeight: 'bold',
						color: '#333',
						marginLeft: '1.5rem'
					},
					'& > .buttons': {
						height: '100%',
						marginLeft: 'auto',

						'& .MuiButton-root': {
							height: '100%',
							borderRadius: 0,

							'& a': {
								textDecoration: 'none',
								fontWeight: 700,
								fontSize: '1.5rem'
							},
						}
					},
				}
			},
		},
	}
})

export default theme
