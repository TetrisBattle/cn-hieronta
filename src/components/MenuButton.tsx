import React, { useState } from 'react'
import { IconButton, IconButtonProps, Menu } from '@mui/material'

interface IProps extends IconButtonProps {
	icon: JSX.Element
}

export default function MenuButton(props: IProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const { icon, children, ...baseProps } = props

	return (
		<>
			<IconButton
				onClick={(e: React.MouseEvent<HTMLElement>) =>
					setAnchorEl(e.currentTarget)
				}
				{...baseProps}
			>
				{icon}
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClick={() => setAnchorEl(null)}
				onClose={() => setAnchorEl(null)}
			>
				{children}
			</Menu>
		</>
	)
}
