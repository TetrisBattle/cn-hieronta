import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export default function MuiThemeProvider({ children }) {
	const colorDisabled = '#7e7e7e'

	const colors = {
		primary: {
			main: red[900],
			light: red[700],
			dark: '#840000',
			contrastText: '#fff',
			disabled: colorDisabled
		},
		secondary: {
			main: '#1cb7b7',
			light: '#abdfe0',
			dark: '#009793',
			contrastText: '#fff',
			disabled: colorDisabled
		},
		text: {
			highEmphasis: '#333',
			mediumEmphasis: '#c4c4c4',
			disabled: colorDisabled
		},
	}

	const theme = createTheme({
		palette: {
			mode: 'light',
			...colors
		},
		typography: {
			fontFamily: 'Roboto, Titillium Web, Helvetica, Arial, sans-serif',
			fontSize: 16,
			h1: {
					fontSize: 36,
					fontWeight: 700
			},
			h2: {
					fontSize: 24,
					fontWeight: 700
			},
			h3: {
					fontSize: 20,
					fontWeight: 700
			},
			h4: {
					fontSize: 16,
					fontWeight: 700
			}
		},
		components: {
			MuiTypography: {
				styleOverrides: {
					root: {
						color: colors.text.main,
					}
				},
				variants: [
					{
						props: { title: true },
						style: {
							fontSize: '1.rem',
							fontWeight: 'bold',
						},
					},
				],
			},
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
							color: colors.primary.contrastText,
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
			MuiStack: {
				variants: [
					{
						props: { type: 'footer' },
						style: {
							height: '4rem',
							marginTop: 'auto',
							flexDirection: 'row',
							alignItems:'center',
							justifyContent:'space-evenly',
							backgroundColor: colors.primary.main,
							'& .MuiTypography-root': {
								fontWeight: 'bold',
								color: colors.primary.contrastText
							},
						},
					},
				],
			},
		}
	})

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}
