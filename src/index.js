import React from 'react'
import StoreProvider from 'providers/StoreProvider'
import MuiThemeProvider from 'providers/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from 'App'

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<MuiThemeProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</MuiThemeProvider>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
