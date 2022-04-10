import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
	const info = {
		title: 'Rentolihas',
		address: {
			street: 'Otokuja 2 D 303',
			city: 'Oulu',
			postCode: '90150',
		},
		phoneNumber: '0402157957'
	}

	return (
		<Box variant='footer'
			component='footer'
			className='footer'
		>
			<Box
				variant='footer'
				component='footer'
				className='footer'
				display='flex'
				alignItems='center'
				height='4rem'
			sx={{
				backgroundColor: (theme) => theme.palette.primary.main,
				'& .MuiTypography-root': {
					fontWeight: 'bold',
					color: (theme) => theme.palette.primary.contrastText
				},
				display: 'flex',
				justifyContent: 'space-evenly'
			}}
			>
				<Typography sx={{ fontSize: 24 }}>{info.title}</Typography>
				<Box>
					<Typography>{info.address.street}</Typography>
					<Typography>{info.address.postCode} {info.address.city}</Typography>
				</Box>
				<Typography>{info.phoneNumber}</Typography>
			</Box>
		</Box>
	)
}
