import { Box, Typography } from '@mui/material'
import { pxToRem } from 'utility/fontHandler'

export default function Guide() {
	return (
		<Box
			sx={{
				maxWidth: 900,
				p: 3,
				mx: 'auto',
				gap: 1,
				display: 'flex',
				flexDirection: 'column',
				' ul li:not(:first-of-type)': {
					mt: 1,
				},
			}}
		>
			<Typography
				sx={{
					textAlign: 'center',
					fontSize: pxToRem(20),
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				Hierontakäynti
			</Typography>
			<ul
				style={{
					listStyle: 'order',
					margin: 0,
				}}
			>
				<li>
					<Typography>
						Täytetään esitietolomake, jossa kartoitetaan onko mm.
						sairauksia, leikkauksia yms, jotka voivat vaikuttaa
						hierontaan.
					</Typography>
				</li>
				<li>
					<Typography>
						Käydään haastattelu jossa tulisi ilmetä missä, milloin,
						minkälainen vaiva on kyseessä.
					</Typography>
				</li>
				<li>
					<Typography>
						Tehdään testejä, joiden avulla voidaan löytää
						mahdollinen vaiva tai ajan hallinnan vuoksi testeillä
						voi nähdä missä on isoimmat kireydet ja keskittyä
						suoraan niihin.
					</Typography>
				</li>
				<li>
					<Typography>
						Sitten alkaakin ihana hoito, jossa pyritään pysymään
						niin sanotussa &quot;makiassa kivussa&quot;, eli tuntuu
						että tehdään jotain, muttei hampaat irvessä jotta
						pysytään täysin rentona.
					</Typography>
				</li>
				<li>
					<Typography>
						Tehdään lopuksi vielä mahdollisia testäjä, jolloin
						huomataan onko tullut muutosta lähtötilanteeseen.
					</Typography>
				</li>
			</ul>
		</Box>
	)
}
