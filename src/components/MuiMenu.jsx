import { useState } from 'react'
import { Button, Menu } from '@mui/material'
import { ReactComponent as MenuIcon } from 'images/Menu.svg'

export default function MuiMenu ({ children }) {
	const [anchorEl, setAnchorEl] = useState(null)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<Button className='MenuButton' onClick={(e) => setAnchorEl(e.currentTarget)}>
				<MenuIcon />
			</Button>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClose={handleClose}
			>{children}</Menu>
		</>
	)
}
