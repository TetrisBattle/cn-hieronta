import { Box } from '@mui/material'
import { useEffect } from 'react'

export default function Ajanvaraus() {
	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://nettivaraus6.ajas.fi/scripts/iframe-embed.php?lid=40fbe618086c&lang=fi'
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return <Box id='nettivaraus6-container'></Box>
}
