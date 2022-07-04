import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true // 0
		sm: true // 600
		md: true // 900
		lg: true // 1200
		xl: true // 1536

		// mobile: true; // 0
		// tablet: true; // 640
		// laptop: true; // 1024
		// desktop: true; // 1200
	}
}

export default function MuiTheme(isDarkTheme: boolean) {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 680,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
		palette: {
			...(isDarkTheme
				? {
						mode: 'dark',
						primary: {
							main: '#000',
						},
				  }
				: {
						mode: 'light',
						primary: {
							main: '#000',
						},
				  }),
		},
		typography: {
			fontFamily: 'Open Sans, Titillium Web, Helvetica, Arial, sans-serif',
			h1: {
				fontSize: 48,
				fontWeight: 400,
			},
			h2: {
				fontSize: 36,
				fontWeight: 400,
			},
			h3: {
				fontSize: 24,
			},
			h4: {
				fontSize: 20,
			},
			h5: {
				fontSize: 16,
			},
			button: {
				fontSize: '1rem',
				fontWeight: 'bold',
				textTransform: 'none',
			},
		},
	})

	return createTheme(theme, {
		components: {
			MuiButton: {
				defaultProps: {
					variant: 'contained',
				},
			},
			MuiLink: {
				defaultProps: {
					underline: 'none',
				},
			},
			MuiAppBar: {
				defaultProps: {
					position: 'static',
				},
			},
			MuiToolbar: {
				defaultProps: {
					disableGutters: true,
				},
				styleOverrides: {
					root: {
						minHeight: 'unset !important',
					},
				},
			},
		},
	})
}
