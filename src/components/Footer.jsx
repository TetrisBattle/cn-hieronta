import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

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
		<Stack component='footer' type='footer'>
			<Typography sx={{ fontSize: '1.5rem' }}>{info.title}</Typography>
			<Box>
				<Typography>{info.address.street}</Typography>
				<Typography>{info.address.postCode} {info.address.city}</Typography>
			</Box>
			<Typography>{info.phoneNumber}</Typography>
		</Stack>
	)
}
