import ReactPlayer from 'react-player'
import { Box } from '@mui/material'
import Summary from './Summary'
import CommentsSection from './CommentsSection'
import Guide from './Guide'

export default function Etusivu() {
	return (
		<>
			<Summary />
			<Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
				<ReactPlayer
					url='videos/mainosvideo.mp4'
					width={720}
					height='auto'
					controls
					volume={0.25}
				/>
			</Box>
			<Guide />
			<CommentsSection />
		</>
	)
}
