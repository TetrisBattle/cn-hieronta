import {
	Grid,
	Button,
	Typography,
	List,
	ListItem,
	ListItemText,
} from '@mui/material'

interface IList {
	props: {
		title: string
		items: string[]
	}
}

const CustomList = ({ props }: IList) => {
	const { title, items } = props

	return (
		<Grid item xs={12}>
			<Typography variant='h2'>{title}</Typography>
			<List dense disablePadding>
				{items.map((item) => (
					<ListItem
						key={item}
						disableGutters
						disablePadding
						sx={{ display: 'list-item', listStyle: 'disc', marginLeft: 2.5 }}
					>
						<ListItemText>{item}</ListItemText>
					</ListItem>
				))}
			</List>
		</Grid>
	)
}

export default function Pricing() {
	const klassinenHieronta = {
		title: 'Klassinen hieronta',
		items: [
			'Rentouttaa',
			'Lievittää lihasjännityksiä ja särkyjä',
			'Parantaa nivelten liikkuvuutta',
			'Nopeuttaa parantumista',
		],
	}

	const urheiluhieronta = {
		title: 'Urheiluhieronta',
		items: [
			'kisakauteen sopiva hieronta',
			'arpikudosten poisto',
			'vammojen ennaltaehkäisy',
			'auttaa lihashuollossa',
		],
	}

	const purentalihastenHieronta = {
		title: 'Purentalihasten hieronta',
		items: [
			'pään, niska- ja hartiaseudun kireyksiin',
			'korvan tinnitukseen ja särkyyn',
			'äänentuottoon ja puheen puuroutumiseen',
		],
	}

	const hinnasto1 = {
		title: 'Klassinen- /urheiluhieronta',
		items: [
			'30min\t30e',
			'40min\t40e',
			'60min\t47e',
			'90min\t65e',
			'120min\t85e',
		],
	}

	const hinnasto2 = {
		title: 'Purentalihastenhieronta',
		items: [`30min\t40e`, `60min\t60e`, `90min\t85e`],
	}

	return (
		<Grid
			container
			columnSpacing={4}
			rowSpacing={2}
			sx={{
				'& .MuiTypography-root': {
					fontWeight: 600,
				},
				'& h2.MuiTypography-root': {
					marginBottom: 0.5,
					fontSize: {
						xs: '1.5rem',
						xl: '1.75rem',
					},
				},
				'& .MuiTypography-root:not(h2)': {
					fontSize: {
						xs: '1rem',
						xl: '1.25rem',
					},
				},
				p: {
					xs: '8px 8px 16pc 8px',
					sm: '8px 25vw 16px 25vw',
					md: 8,
				},
			}}
		>
			<Grid container item xs={12} md={6} spacing={2}>
				<CustomList props={klassinenHieronta} />
				<CustomList props={urheiluhieronta} />
				<CustomList props={purentalihastenHieronta} />

				<Grid item xs={12}>
					<Typography variant='h2'>Yhteystiedot</Typography>
					<Typography>Pakkahuoneenkatu 5 B 17, 90100 Oulu, 2. krs.</Typography>
					<Typography>Puhelinnumero: 0451420611</Typography>
					<Typography>Sähköposti: cnhierontapalvelut@gmail.com</Typography>
					<br />
					<Typography>Oven avaus ovisummerilla.</Typography>
				</Grid>
			</Grid>

			<Grid container item xs={12} md={6} spacing={2}>
				<CustomList props={hinnasto1} />
				<CustomList props={hinnasto2} />

				<Grid item xs={12}>
					<Typography variant='h2'>Ajanvaraus</Typography>
					<Typography>
						Akuuteissa tapauksissa kalenterin ulkopuolelle soittamalla. Hieron
						lähtökohtaisesti 30min mutta maksimissaan 60min, josta perin 5e
						lisän.
					</Typography>
					<br />
					<Typography>
						Esteen tullessa peru 12h ennen varattua aikaa sähköpostiisi
						tulleesta linkinstä, soittamalla tai tekstiviestillä.
					</Typography>
					<br />
					<Typography>
						Jos tulet ensimmäistä kertaa paikalle, saavuthan 5 minuuttia aiemmin
						paikalle.
					</Typography>
					<br />
					<Typography>
						Alle 12h peruutetusta ajasta perin 50%, alle 6h 100%.
					</Typography>
					<Typography>
						Yrityksille ja järjestöille voidaan sopia tarjouksia sähköpostitse.
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant='h2'>Maksutavat</Typography>
					<Typography>
						Käteinen, korttimaksu, MobilePay, e-passi, Smartum, Easy-break,
						edenred
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Button
						variant='outlined'
						href='https://vello.fi/cn-hierontapalvelut/'
						target='_blank'
						sx={{
							borderRadius: 40,
							borderWidth: '4px !important',
							borderColor: '#333',
							fontSize: '1.25rem',
						}}
					>
						Tästä ajanvaraukseen
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}
