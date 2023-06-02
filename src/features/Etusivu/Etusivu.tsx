import ReactPlayer from 'react-player'
import { Box, Typography } from '@mui/material'
import Summary from './Summary'
import CommentsSection from './CommentsSection'
import Guide from './Guide'

export default function Etusivu() {
	return (
		<>
			<Summary />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					p: 3,
				}}
			>
				<ReactPlayer
					url='videos/mainosvideo.mp4'
					width={720}
					height='auto'
					controls
					volume={0.25}
				/>
				<Typography>Video ja kuvat: Marjo Karinkanta</Typography>
			</Box>
			<Guide />
			<CommentsSection />
		</>
	)
}
