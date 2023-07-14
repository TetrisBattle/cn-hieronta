import {
	Grid,
	Button,
	Typography,
	List,
	ListItem,
	ListItemText,
} from '@mui/material'
import { pxToRem } from 'utility/fontHandler'

interface CustomListProps {
	title: string
	items: string[]
}

const CustomList = ({ title, items }: CustomListProps) => {
	return (
		<Grid item xs={12}>
			<Typography variant='h2'>{title}</Typography>
			<List dense disablePadding>
				{items.map((item) => (
					<ListItem
						key={item}
						disableGutters
						disablePadding
						sx={{
							display: 'list-item',
							listStyle: 'disc',
							marginLeft: 2,
						}}
					>
						<ListItemText
							sx={{
								' span': {
									fontSize: pxToRem(16),
								},
							}}
						>
							{item}
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Grid>
	)
}

export default function Palvelut() {
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

	const teippaus = {
		title: 'Teippaus',
		items: [
			'Kinesioteippaus: Lihastoiminnan tehostaminen',
			'Lymfateippaus: Auttaa turvotukseen',
			'Kovateippaus: Tukee täysin niveltä, eikä päästä ollenkaam virheasentoon',
		],
	}

	const hinnasto = {
		title: 'Hinnat',
		items: [
			'20min\t23e',
			'50min\t45e',
			'80min\t63e',
			'110min\t84e',
			'Teippaus (hoidon yhteydessä)\t+5e',
			'Ison alueen teippaus\t15e',
		],
	}

	return (
		<Grid
			container
			columnSpacing={10}
			rowSpacing={3}
			sx={{
				p: 3,
				justifyContent: 'center',
				'& .MuiTypography-root': {
					fontWeight: (theme) => theme.typography.fontWeightMedium,
				},
				'& h2.MuiTypography-root': {
					marginBottom: 0.5,
					fontSize: pxToRem(20),
					fontWeight: 600,
				},
			}}
		>
			<Grid container item xs={12} md={5} spacing={2}>
				<CustomList {...klassinenHieronta} />
				<CustomList {...urheiluhieronta} />
				<CustomList {...purentalihastenHieronta} />
				<CustomList {...teippaus} />
			</Grid>

			<Grid container item xs={12} md={5} spacing={2}>
				<CustomList {...hinnasto} />
				<Typography sx={{ ml: 4 }}>
					(teippausta halutessasi kirjoita varauksen yhteydessä
					lisätietoihin alue ja vaiva)
				</Typography>

				<Grid item xs={12}>
					<Typography variant='h2'>Ajanvaraus</Typography>
					<Typography>
						Esteen tullessa peru 12h ennen varattua aikaa
						sähköpostiisi tulleesta linkistä, soittamalla tai
						tekstiviestillä.
					</Typography>
					<br />
					<Typography>
						Jos tulet ensimmäistä kertaa paikalle, saavuthan 5
						minuuttia aiemmin paikalle.
					</Typography>
					<br />
					<Typography>
						Alle 12h peruutetusta ajasta perin 50%, alle 6h 100%.
					</Typography>
					<Typography>
						Yrityksille ja järjestöille voidaan sopia tarjouksia
						sähköpostitse.
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant='h2'>Maksutavat</Typography>
					<Typography>
						Käteinen, korttimaksu, Epassi, Smartum, Edenred
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Button
						// variant='outlined'
						href='https://vello.fi/cnhierontapalvelut'
						target='_blank'
						sx={{
							borderRadius: 99,
						}}
					>
						Tästä ajanvaraukseen
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}
