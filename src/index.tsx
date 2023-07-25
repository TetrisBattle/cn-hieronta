import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'contexts/StoreContext'
import MuiThemeProvider from 'material-ui/MuiThemeProvider'
import App from './App'

const rootElement = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

rootElement.render(
	<React.StrictMode>
		<StoreProvider>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
