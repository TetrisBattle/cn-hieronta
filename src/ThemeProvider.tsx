import { ThemeOptions } from '@thng/react'
import { BaseThemeProvider } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider = observer(({ children }: ThemeProviderProps) => {
	const {
		appStore: { isDarkMode },
	} = useStore()

	const theme: ThemeOptions = {
		palette: isDarkMode
			? {
					mode: 'dark',
			  }
			: {
					mode: 'light',
					primary: {
						main: '#FEE972',
						contrastText: '#333',
					},
			  },
	}

	return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
})
