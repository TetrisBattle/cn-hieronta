import { Box, Typography } from '@mui/material'
import { Summary } from './Summary'
import { CommentsSection } from './CommentsSection'
import { Guide } from './Guide'

export const Etusivu = () => {
	return (
		<>
			<Summary />
			<Box
				sx={{
					textAlign: 'center',
					p: 3,
					maxWidth: 720,
					mx: 'auto',
				}}
			>
				<Box
					sx={{
						position: 'relative',
						overflow: 'hidden',
						width: '100%',
						paddingTop: '56.25%', //  16:9 Aspect Ratio (9/16 = 0.5625)
					}}
				>
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/i55xJMgmqAY'
						title='CN hierontapalvelut'
						allowFullScreen
						style={{
							position: 'absolute',
							inset: 0,
						}}
					></iframe>
				</Box>

				<Typography>Video ja kuvat: Marjo Karinkanta</Typography>
			</Box>
			<Guide />
			<CommentsSection />
		</>
	)
}
