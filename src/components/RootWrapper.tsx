import { Box } from '@mui/material'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface IProps {
	children: React.ReactNode
}

export default function RootWrapper({ children }: IProps) {
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
