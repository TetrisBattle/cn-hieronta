interface IList {
	props: {
		title: string;
		items: string[];
	}
}

const List = ({ props }: IList) => {
	const { title, items } = props

	return <div>
		<h2>{title}</h2>
		<ul>
			{items.map((item) => <li key={item}>{item}</li>)}
		</ul>
	</div>
}

export default function Palvelut() {
	const klassinenHieronta = {
		title: 'Klassinen hieronta',
		items: [
			'Rentouttaa',
			'Lievittää lihasjännityksiä ja särkyjä',
			'Parantaa nivelten liikkuvuutta',
			'Nopeuttaa parantumista'
		]
	}

	const urheiluhieronta = {
		title: 'Urheiluhieronta',
		items: [
			'kisakauteen sopiva hieronta',
			'arpikudosten poisto',
			'vammojen ennaltaehkäisy',
			'auttaa lihashuollossa'
		]
	}

	const purentalihastenHieronta = {
		title: 'Purentalihasten hieronta',
		items: [
			'pään, niska- ja hartiaseudun kireyksiin',
			'korvan tinnitukseen ja särkyyn',
			'äänentuottoon ja puheen puuroutumiseen'
		]
	}

	const hinnasto1 = {
		title: 'Klassinen- /urheiluhieronta',
		items: [
			'30min\t77e',
			'60min\t90e',
			'90min\t12e',
			'120min\t15e'
		]
	}

	const hinnasto2 = {
		title: 'Purentalihastenhieronta',
		items: [
			`30min\t78e`,
			`60min\t91e`,
			`90min\t13e`
		]
	}

	return (
		<main className='Palvelut'>
			<div className='leftSide split'>
				<List props={klassinenHieronta} />
				<List props={urheiluhieronta} />
				<List props={purentalihastenHieronta} />
			</div>

			<div className='rightSide split'>
				<div className="hinnat">
					<List props={hinnasto1} />
					<List props={hinnasto2} />
				</div>

				<div>
					<h2>Ajanvaraus</h2>
					<p>
						Esteen tullessa peru 12h ennen varattua aikaa sähköpostiisi
						tulleesta linkinstä, soittamalla tai tekstiviestillä.
					</p>
					<br />
					<p>Alle 12h peruutetusta ajasta perin 50%, alle 6h 100%.</p>
				</div>
				<button>Varaa aika tästä</button>
			</div>
		</main>
	)
}
