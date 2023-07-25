import React from 'react'
import { observer } from 'mobx-react-lite'
import MuiTheme from './MuiTheme'
import { useStore } from 'contexts/StoreContext'
import { CssBaseline, ThemeProvider } from '@mui/material'

interface MuiThemeProviderProps {
	children: React.ReactNode
}

function MuiThemeProvider({ children }: MuiThemeProviderProps) {
	const { appStore } = useStore()
	const theme = MuiTheme(appStore.isDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

export default observer(MuiThemeProvider)
