import {
	Grid,
	Button,
	Typography,
	List,
	ListItem,
	ListItemText,
	Box,
} from '@mui/material'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

type CustomListProps = {
	title: string
	items: string[]
}

export const CustomList = ({ title, items }: CustomListProps) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
									fontSize: (theme) =>
										theme.typography.pxToRem(16),
								},
							}}
						>
							{item}
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export const Palvelut = observer(() => {
	const { appStore } = useStore()

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

	const kuivakuppaus = {
		title: 'Kuivakuppaus',
		items: [
			'Ihoa, ihonalaiskudoksia ja lihaskalvoa nostetaan kupeilla irti alustastaan, eli mekaniikka on päinvastainen kuin hieronnalla.',
			'Alipaineella saadaan tilaa ihon alla oleviin kudoksiin ja aineenvaihdunta paranee ja liikkuvuus lisääntyy. Samalla hoidetaan tietenkin lihaksia ja kireyspisteitä.',
			'Hieronnan ohella tehtävä kuppaus nopeuttaa hoitotuloksen saamista ja tuntuu tosi miellyttävältä',
			'Kuppeja pidetään paikoillaan. Tästä johtuen jos kupin alla olevalla alueella on heikko aineenvaihdunta, tähän tulee jäämään verenpurkauma (mustelma) jälki.',
		],
	}

	const hinnasto = {
		title: 'Hinnat',
		items: [
			'30min\t30e',
			'45min\t45e',
			'60min\t55e',
			'75min\t65e',
			'90min\t75e',
			'105min\t85e',
			'120min\t95e',
		],
	}

	return (
		<Grid
			container
			columnGap={10}
			rowGap={3}
			sx={{
				p: 3,
				justifyContent: 'center',
				'& h2.MuiTypography-root': {
					marginBottom: 0.5,
					fontSize: (theme) => theme.typography.pxToRem(20),
					fontWeight: (theme) => theme.typography.fontWeightMedium,
				},
			}}
		>
			<Grid item container xs={12} md={5} spacing={2}>
				<Grid item xs={12}>
					<CustomList {...klassinenHieronta} />
				</Grid>
				<Grid item xs={12}>
					<CustomList {...urheiluhieronta} />
				</Grid>
				<Grid item xs={12}>
					<CustomList {...purentalihastenHieronta} />
				</Grid>
				<Grid item xs={12}>
					<CustomList {...teippaus} />
				</Grid>
				<Grid item xs={12}>
					<CustomList {...kuivakuppaus} />
				</Grid>
			</Grid>

			<Grid item xs={12} md={5}>
				<Box sx={{ display: 'Flex', flexDirection: 'column', gap: 2 }}>
					<CustomList {...hinnasto} />

					<Box>
						<Typography variant='h2'>Ajanvaraus</Typography>
						<Typography>
							Mikäli olet estynyt saapumaan, peruthan aikasi
							viimeistään edellisenä päivä klo. 18:00 mennessä.
							Peruuttamattomasta ajasta veloitamme 85% hoidon
							hinnasta.
						</Typography>
					</Box>

					<Box>
						<Typography variant='h2'>Maksutavat</Typography>
						<Typography>
							Käteinen, korttimaksu, Epassi, Smartum, Edenred
						</Typography>
					</Box>

					<Box>
						<Button
							href={appStore.ajanvarausLinkki}
							target='_blank'
							sx={{
								borderRadius: 99,
								fontWeight: (theme) =>
									theme.typography.fontWeightBold,
							}}
						>
							Tästä ajanvaraukseen
						</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	)
})
