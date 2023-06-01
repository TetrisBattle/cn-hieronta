import { Box } from '@mui/material'
import Header from 'components/header/Header'
import Footer from 'components/Footer'

interface RootWrapperProps {
	children: React.ReactNode
}

export default function RootWrapper({ children }: RootWrapperProps) {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				'& img': { objectFit: 'cover' },
			}}
		>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</Box>
	)
}
