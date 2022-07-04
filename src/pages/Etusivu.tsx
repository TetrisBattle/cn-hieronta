import { Grid, Typography, useTheme } from '@mui/material'
import CamTuImg from 'images/CamTu.jpeg'

export default function Home() {
	const theme = useTheme()

	return (
		<Grid
			container
			sx={{
				justifyContent: 'space-evenly',
				paddingTop: 3,
				'& .MuiTypography-root': {
					fontWeight: 600,
				},
				[theme.breakpoints.up('sm')]: {
					paddingBlock: 4,
					paddingInline: 1,
				},
				[theme.breakpoints.up('lg')]: {
					padding: 4,
					'& .MuiTypography-root': {
						fontSize: '1.125rem',
					},
				},
				[theme.breakpoints.up('xl')]: {
					'& .MuiTypography-root': {
						fontSize: '1.25rem',
					},
				},
			}}
		>
			<Grid item xs={9} sm={5} lg={4} xl={3.4}>
				<img src={CamTuImg} alt='Selkahieronta' width='100%' loading='lazy' />
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				xl={5}
				sx={{ padding: 2, gap: 2, display: 'flex', flexDirection: 'column' }}
			>
				<Typography>Minun nimeni on CamTu Nguyen. Olen 24-vuotias.</Typography>
				<Typography>
					Aiemmalta ammatiltani olen lähihoitaja, 2021 kävin kuntosalivalmennus
					kurssin, sekä valmistuin Suomen hierojakoulusta koulutetuksi
					hierojaksi.
				</Typography>
				<Typography>
					Teen klassista-, urheilu- ja purentalihasten hierontaa. Hoidossa
					yhdistelen klassisen- ja urheiluhieronnan tekniikoita, sekä trigger-,
					ja fasciatekniikoita. Teen myös kinesio-, lymfa- ja kovateippausta.
				</Typography>
				<Typography>
					Annan myös mielelläni hoidon aikana neuvoja treenaamiseen,
					palautumiseen ja syömiseen.
				</Typography>
			</Grid>
		</Grid>
	)
}
