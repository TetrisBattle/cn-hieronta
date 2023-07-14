import { createTheme } from '@mui/material'

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
				sm: 600,
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
							main: '#FEE972',
							contrastText: '#333',
						},
				  }),
		},
		typography: {
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
