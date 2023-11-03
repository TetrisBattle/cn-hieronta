import { Grid, Typography, useTheme } from '@mui/material'
import CamTuImg from 'assets/camtu/camtu.jpeg'

export const Yritys = () => {
	const theme = useTheme()

	return (
		<Grid
			container
			sx={{
				justifyContent: 'space-evenly',
				pt: 3,
				[theme.breakpoints.up('sm')]: {
					py: 4,
					px: 1,
				},
				[theme.breakpoints.up('lg')]: {
					p: 4,
				},
			}}
		>
			<Grid item xs={9} sm={5} lg={4} xl={3.4}>
				<img src={CamTuImg} alt='Selkahieronta' width='100%' />
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				xl={5}
				sx={{
					padding: 2,
					gap: 2,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography>Hei!</Typography>
				<Typography>
					Olen Cam Tu Nguyen, aiemmalta ammatiltani olen lähihoitaja.
					2021 kävin kuntosalivalmennus kurssin, sekä valmistuin
					Suomen hierojakoulusta koulutetuksi hierojaksi.
				</Typography>
				<Typography>
					Teen klassista-, urheilu- ja purentalihasten hierontaa.
					Hoidossa yhdistelen klassisen- ja urheiluhieronnan
					tekniikoita, sekä trigger-, ja fasciatekniikoita aina
					asiakkaan tarpeiden mukaan. Teen myös kinesio-, lymfa- ja
					kovateippausta.
				</Typography>
				<Typography>
					Annan myös mielelläni hoidon aikana neuvoja treenaamiseen,
					palautumiseen ja syömiseen.
				</Typography>
			</Grid>
		</Grid>
	)
}
