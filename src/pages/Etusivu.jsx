import { Button } from '@mui/material'
import CamTuImg from 'images/png/CamTu.jpeg'

export default function Etusivu() {
	return (
		<div className='Etusivu'>
			<img src={CamTuImg} alt="Selkahieronta" />
			<div className='content'>
				<h2>CamTu Nguyen</h2>

				<p>
					Olen 24- vuotias. Aiemmalta ammatiltani olen lähihoitaja, 2021 kävin
					kuntosalivalmennus kurssin, sekä valmistuin Suomen hierojakoulusta
					koulutetuksi hierojaksi. Teen klassista-, urheilu- ja purentalihasten
					hierontaa.
				</p>

				<p>
					Hoidossa yhdistelen klassisen- ja urheiluhieronnan tekniikoita, sekä
					trigger-, ja fasciatekniikoita. Kinesio-, lymfa- ja kovateippausta.
					Annan mielelläni hoidon aikana neuvoja treenaamiseen, palautumiseen
					ja syömiseen.
				</p>

				<h2>Klassinen hieronta</h2>
				<ul>
					<li><p>rentouttaa</p></li>
					<li><p>lievittää lihasjännityksiä ja särkyjä</p></li>
					<li><p>parantaa nivelten liikkuvuutta</p></li>
					<li><p>nopeuttaa parantumist</p></li>
				</ul>

				<h2>Urheiluhieronta</h2>
				<ul>
					<li><p>kisakauteen sopiva hieronta</p></li>
					<li><p>arpikudosten poisto</p></li>
					<li><p>vammojen ennaltaehkäisy</p></li>
					<li><p>auttaa lihashuollossa</p></li>
				</ul>

				<h2>Purentalihasten hieronta</h2>
				<ul>
					<li><p>pään, niska- ja hartiaseudun kireyksiin</p></li>
					<li><p>korvan tinnitukseen ja särkyyn</p></li>
					<li><p>äänentuottoon ja puheen puuroutumiseen</p></li>
				</ul>

				<h2>Purentalihasten hieronta</h2>
				<p>
					Esteen tullessa peru 12h ennen varattua aikaa sähköpostiisi
					tulleesta linkinstä, soittamalla tai tekstiviestillä.
				</p>

				<p>Alle 12h peruutetusta ajasta perin 50%, alle 6h 100%.</p>

				<Button type='round'>Varaa aika</Button>
			</div>
		</div>
	)
}
