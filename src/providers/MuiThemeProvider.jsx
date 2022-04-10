import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { red, blue } from '@mui/material/colors'

export default function MuiThemeProvider({ children }) {
	const colorDisabled = '#7e7e7e'

	const colors = {
		primary: {
			main: red[700],
			light: red[100],
			dark: red[900],
			contrastText: '#fff',
			disabled: colorDisabled
		},
		secondary: {
			main: blue[700],
			light: blue[100],
			dark: blue[900],
			contrastText: '#fff',
			disabled: colorDisabled
		},
		text: {
			main: '#333',
			disabled: colorDisabled
		},
	}

	const theme = createTheme({
		palette: {
			mode: 'light',
			...colors
		},
		components: {
			MuiTypography: {
				styleOverrides: {
					root: {
						color: colors.text.main,
						fontSize: '1rem'
					}
				}
			},
			MuiAppBar: {
				defaultProps: {
					position: 'static',
					sx: {
						height: '4rem',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',

						'& > svg': { height: '100%' },
						'& > h1': {
							fontSize: 32,
							fontWeight: 'bold',
							color: colors.primary.contrastText
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
									fontSize: 16
								},
							}
						},
					}
				},
			}
		},
	})

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}
