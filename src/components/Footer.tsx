import { Grid, Link, Typography, useTheme } from '@mui/material'
import Instagram from 'images/Instagram.png'

export default function Footer() {
	const theme = useTheme()

	const info = {
		address: {
			street: 'Pakkahuoneenkatu 5 B 17',
			city: 'Oulu',
			postCode: '90100',
		},
		phoneNumber: '0451420611',
		email: 'cnhierontapalvelut@gmail.com',
		instagram: '@CNhierontapalvelut',
	}

	return (
		<Grid
			container
			component={'footer'}
			sx={{
				backgroundColor: theme.palette.primary.main,
				marginTop: 'auto',
				color: theme.palette.text.primary,
				padding: 1,
				justifyContent: 'space-evenly',
				'& .MuiTypography-root': {
					fontWeight: 600,
				},
				'& .MuiGrid-item': {
					display: 'flex',
					[theme.breakpoints.down('lg')]: {
						justifyContent: 'center',
					},
					[theme.breakpoints.up('lg')]: {
						paddingBlock: 1,
					},
					[theme.breakpoints.up('xl')]: {
						'& .MuiTypography-root': {
							fontSize: '1.25rem'
						},
					},
				},
			}}
		>
			<Grid item xs={12} lg={'auto'}>
				<Typography>
					{info.address.street}, {info.address.postCode} {info.address.city}
				</Typography>
			</Grid>

			<Grid item xs={12} lg={'auto'}>
				<Typography>{info.phoneNumber}</Typography>
			</Grid>

			<Grid item xs={12} lg={'auto'}>
				<Typography>{info.email}</Typography>
			</Grid>

			<Grid item xs={12} lg={'auto'}>
				<Link
					href='https://www.instagram.com/CNhierontapalvelut/'
					target='_blank'
					sx={{ color: 'inherit', display: 'flex', gap: .5, alignItems: 'center' }}
				>
					<img src={Instagram} width={24} height={24} alt='Instagram' />
					<Typography>{info.instagram}</Typography>
				</Link>
			</Grid>
		</Grid>
	)
}
