import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'providers/MuiThemeProvider'
import App from 'App'

ReactDOM.render(
	<React.StrictMode>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
