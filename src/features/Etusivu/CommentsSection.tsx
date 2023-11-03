import { Box, Typography } from '@mui/material'
import CamTuPic from 'assets/camtu/camtu_massaging.jpg'
import { useEffect, useRef, useState } from 'react'

const CamtuImg = () => {
	return (
		<img
			src={CamTuPic}
			alt='CamTu'
			style={{ width: 240, height: 'auto' }}
		/>
	)
}

const Comments = ({
	commentsBoxRef,
}: {
	commentsBoxRef: React.RefObject<HTMLDivElement>
}) => {
	return (
		<Box
			ref={commentsBoxRef}
			sx={{
				width: 1,
				alignSelf: 'center',
				textAlign: 'center',
				p: 2,
				' .MuiTypography-root': {
					color: (theme) => theme.palette.primary.main,
				},
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
			}}
		>
			<Typography>
				&quot;Lämmin ja tervetullut olo. Erittäin osaavatoimija!&quot;
			</Typography>
			<Typography>
				&quot;Iloinen ja oikeasti intohimoinen ja motivoitunut
				hieroja.&quot;
			</Typography>
			<Typography>
				&quot;Ammattitaitoista, laadukasta ja huippua palvelua&quot;
			</Typography>
		</Box>
	)
}

const BackgroundBar = ({
	commentsBoxHeight,
}: {
	commentsBoxHeight: number
}) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				inset: 0,
				zIndex: -1,
				display: 'flex',
			}}
		>
			<Box
				sx={{
					width: 1,
					alignSelf: 'center',
					bgcolor: 'rgba(0,0,0,0.5)',
					p: 2,
					height: commentsBoxHeight,
				}}
			/>
		</Box>
	)
}

export const CommentsSection = () => {
	const commentsBoxRef = useRef<HTMLDivElement>(null)
	const [commentsBoxHeight, setCommentsBoxHeight] = useState(0)
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth)
			if (!commentsBoxRef.current) return
			setCommentsBoxHeight(commentsBoxRef.current.clientHeight)
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [commentsBoxRef])

	if (windowWidth < 640) {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
					alignItems: 'center',
				}}
			>
				<CamtuImg />
				<Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', width: 1, mb: 3 }}>
					<Comments commentsBoxRef={commentsBoxRef} />
				</Box>
			</Box>
		)
	}

	return (
		<Box
			sx={{
				pl: 8,
				pr: 1,
				mb: 3,
				position: 'relative',
				display: 'flex',
			}}
		>
			<CamtuImg />
			<Comments commentsBoxRef={commentsBoxRef} />
			<BackgroundBar commentsBoxHeight={commentsBoxHeight} />
		</Box>
	)
}
