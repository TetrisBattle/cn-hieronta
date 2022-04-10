import { Stack, Box, Typography, Button } from '@mui/material'
import CamTu from 'images/png/CamTu.jpeg'

export default function Home() {
	return (
		<Stack flexDirection='row'>
			<img src={CamTu} alt="Selkahieronta" style={{ height: '60rem' }} />
			<Stack padding='2rem' gap='1rem' maxWidth='46rem' >
				<Typography
					variant='h1'
					sx={{ fontSize: '2rem', fontWeight: 'bold' }}
				>CamTu Nguyen</Typography>

				<Typography>
					Olen 24- vuotias. Aiemmalta ammatiltani olen lähihoitaja, 2021 kävin kuntosalivalmennus kurssin, sekä valmistuin Suomen hierojakoulusta koulutetuksi hierojaksi. Teen klassista-, urheilu- ja purentalihasten hierontaa.
				</Typography>

				<Typography>
					Hoidossa yhdistelen klassisen- ja urheiluhieronnan tekniikoita, sekä trigger-, ja fasciatekniikoita. Kinesio-, lymfa- ja kovateippausta. Annan mielelläni hoidon aikana neuvoja treenaamiseen, palautumiseen ja syömiseen.
				</Typography>

				<Box>
					<Typography variant='h2'>Klassinen hieronta</Typography>
					<ul>
						<li><Typography>rentouttaa</Typography></li>
						<li><Typography>lievittää lihasjännityksiä ja särkyjä</Typography></li>
						<li><Typography>parantaa nivelten liikkuvuutta</Typography></li>
						<li><Typography>nopeuttaa parantumist</Typography></li>
					</ul>
				</Box >

				<Box>
					<Typography variant='h2'>Urheiluhieronta</Typography>
					<ul>
						<li><Typography>kisakauteen sopiva hieronta</Typography></li>
						<li><Typography>arpikudosten poisto</Typography></li>
						<li><Typography>vammojen ennaltaehkäisy</Typography></li>
						<li><Typography>auttaa lihashuollossa</Typography></li>
					</ul>
				</Box >

				<Box>
					<Typography variant='h2'>Purentalihasten hieronta</Typography>
					<ul>
						<li><Typography>pään, niska- ja hartiaseudun kireyksiin</Typography></li>
						<li><Typography>korvan tinnitukseen ja särkyyn</Typography></li>
						<li><Typography>äänentuottoon ja puheen puuroutumiseen</Typography></li>
					</ul>
				</Box >

				<Box>
					<Typography variant='h2'>Purentalihasten hieronta</Typography>
					<Typography>
						Esteen tullessa peru 12h ennen varattua aikaa sähköpostiisi tulleesta linkinstä, soittamalla tai tekstiviestillä.
					</Typography>
				</Box >

				<Typography>
					Alle 12h peruutetusta ajasta perin 50%, alle 6h 100%.
				</Typography>

				<Button type='round'>
					Varaa aika
				</Button>
			</Stack>
		</Stack>
	)
}
