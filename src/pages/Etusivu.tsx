import CamTuImg from 'images/CamTu.jpeg'

export default function Etusivu() {
	return (
		<main className='Etusivu'>
			<img src={CamTuImg} alt="Selkahieronta" />
			{/* <img src={CamTuImg} alt="Selkahieronta" width="1200" height="1600" /> */}

			<section>
				<p>
					Minun nimeni on CamTu Nguyen. Olen 24- vuotias.
				</p>

				<p>
					Aiemmalta ammatiltani olen lähihoitaja, 2021 kävin kuntosalivalmennus
					kurssin, sekä valmistuin Suomen hierojakoulusta koulutetuksi hierojaksi.
				</p>

				<p>
					Teen klassista-, urheilu- ja purentalihasten hierontaa.
					Hoidossa yhdistelen klassisen- ja urheiluhieronnan tekniikoita,
					sekä trigger-, ja fasciatekniikoita. Teen myös kinesio-, lymfa- ja kovateippausta.
				</p>

				<p>
					Annan mielelläni hoidon aikana neuvoja treenaamiseen,
					palautumiseen ja syömiseen.
				</p>
			</section>
		</main>
	)
}
