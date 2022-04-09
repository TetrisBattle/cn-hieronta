import Selkahieronta from '../images/Selkahieronta.png'

export default function Etusivu() {
	return (
		<div className='Etusivu'>
			<img src={Selkahieronta} alt="Selkähieronta" />
			<div className='layer'>
				<p>Suomalainen hierontapalvelu</p>
			</div>
		</div>
	)
}
