import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import MuiTheme from 'styles/MuiTheme'
import App from './App'
import 'styles/sass/main.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<ThemeProvider theme={MuiTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
