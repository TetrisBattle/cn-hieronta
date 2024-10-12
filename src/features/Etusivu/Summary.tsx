import { Link, Stack, Typography, useTheme } from '@mui/material'
import { useStore } from 'hooks/useStore'

export const Summary = () => {
	const { appStore } = useStore()
	const theme = useTheme()

	return (
		<Stack
			sx={{
				py: 2,
				px: 3,
				gap: 1,
				mx: 'auto',
				maxWidth: 720,
			}}
		>
			<Typography
				sx={{
					fontSize: (theme) => theme.typography.pxToRem(20),
					fontWeight: theme.typography.fontWeightBold,
					textAlign: 'center',
				}}
			>
				Hierontaa Oulun Etu-Lyötyssä Kuntomon tiloissa
			</Typography>

			<Typography>
				Ammattilaisen apua lihaskireyksiin tai rentoutumiseen.
				Monipuolisia hoitokeinoja ja kehon hyvinvointia.
			</Typography>

			<Typography>
				Olen ammatinharjoittajana Kuntomon Etu- Lyötyssä. Kuntomo löytyy
				osoitteesta {appStore.address}. Käynti sisäpihan kautta, josta
				löytyy myös parkkipaikka.
			</Typography>

			<Typography>
				<b>Hox!</b> Lahjakortit, jotka ovat osoitettu CN
				hierontapalvelulle, tulee käyttää ennen elokuun 15.2024
			</Typography>

			<Typography>
				Siirry ajanvaraus kalenteriin&nbsp;
				<Link
					href={appStore.ajanvarausLinkki}
					target='_blank'
					color={theme.palette.text.primary}
					fontWeight={theme.typography.fontWeightBold}
				>
					tästä.
				</Link>
			</Typography>
		</Stack>
	)
}
