import { Button } from '@mui/material'

export default function Palvelut() {
	return (
		<main className='Palvelut'>
			<div className='tarjonta'>
				<h2>Klassinen hieronta</h2>
				<ul>
					<li>rentouttaa</li>
					<li>lievittää lihasjännityksiä ja särkyjä</li>
					<li>parantaa nivelten liikkuvuutta</li>
					<li>nopeuttaa parantumist</li>
				</ul>

				<h2>Urheiluhieronta</h2>
				<ul>
					<li>kisakauteen sopiva hieronta</li>
					<li>arpikudosten poisto</li>
					<li>vammojen ennaltaehkäisy</li>
					<li>auttaa lihashuollossa</li>
				</ul>

				<h2>Purentalihasten hieronta</h2>
				<ul>
					<li>pään, niska- ja hartiaseudun kireyksiin</li>
					<li>korvan tinnitukseen ja särkyyn</li>
					<li>äänentuottoon ja puheen puuroutumiseen</li>
				</ul>
			</div>

			<div>
				<div className='hinnasto'>
					<h2>Hinnasto</h2>
					<div>
							<ul>
								<li>Klassinen- /urheiluhieronta</li>
								<li>30min&emsp;&ensp;77e</li>
								<li>60min&emsp;&ensp;90e</li>
								<li>90min&emsp;&ensp;12e</li>
								<li>120min&emsp;15e</li>
							</ul>
						<ul>
							<li>Purentalihastenhieronta</li>
							<li>30min&emsp;&ensp;78e</li>
							<li>60min&emsp;&ensp;91e</li>
							<li>90min&emsp;&ensp;13e</li>
						</ul>
					</div>
				</div>

				<div className='ajanvaraus'>
					<h2>Ajanvaraus</h2>
					<p>
						Esteen tullessa peru 12h ennen varattua aikaa sähköpostiisi
						tulleesta linkinstä, soittamalla tai tekstiviestillä.
					</p>
					<br />
					<p>Alle 12h peruutetusta ajasta perin 50%, alle 6h 100%.</p>

					<Button type='round'>Varaa aika tästä</Button>
				</div>
			</div>
		</main>
	)
}
