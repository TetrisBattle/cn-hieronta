import { useTheme, Box } from '@mui/material'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useStoreContext } from 'StoreContext'

interface IProps {
	children: React.ReactNode
}

export default function RootWrapper({ children }: IProps) {
	const {
		appStore: { isDarkTheme },
	} = useStoreContext()
	const theme = useTheme()

	return (
		<Box
			sx={{
				// bgcolor: theme.palette.background.default,
				// background: isDarkTheme
				// 	? 'linear-gradient(135deg, #eee, #ddd)'
				// 	: `linear-gradient(135deg, #fff, #f5ecb8)`,
				backgroundColor: '#fff',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				// color: theme.palette.text.primary,
				color: 'black',
				'& img': {
					objectFit: 'cover'
				}
			}}
		>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</Box>
	)
}
