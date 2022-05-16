import { createTheme } from '@mui/material/styles'

let theme = createTheme({
  palette: {
		primary: {
			main: '#F8E5AC',
			light: '#f9eabc',
			dark: '#f1cc5e',
			contrastText: '#333',
		},
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				sx: {
					fontWeight: 'bold',
					fontSize: '1.5rem',
					textTransform: 'none'
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
