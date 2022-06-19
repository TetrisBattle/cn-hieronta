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
							main: '#FFD700',
							contrastText: '#333',
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
				styleOverrides: {
					root: {
						'& .MuiToolbar-root': {
							padding: 16,
							'& .navButtons': {
								[theme.breakpoints.down('sm')]: {
									display: 'none',
								},
								'& .MuiButton-root': {
									color: 'inherit',
									backgroundColor: 'transparent',
									fontSize: '1.25rem',
								},
							},
							'& .menuIcon': {
								color: 'inherit',
								[theme.breakpoints.up('sm')]: {
									display: 'none',
								},
							},
						},
					},
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
			MuiDialog: {
				defaultProps: {
					fullWidth: true,
					maxWidth: 'sm',
				},
			},
			MuiDialogTitle: {
				styleOverrides: {
					root: {
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
						fontWeight: 'bold',
						padding: '8px 8px 8px 16px',
						cursor: 'grab',
						'& .MuiIconButton-root': {
							color: 'inherit',
						},
					},
				},
			},
			MuiDialogContent: {
				styleOverrides: {
					root: {
						padding: '16px !important',
					},
				},
			},
			MuiDialogActions: {
				styleOverrides: {
					root: {
						padding: '16px',
					},
				},
			},
		},
	})
}
