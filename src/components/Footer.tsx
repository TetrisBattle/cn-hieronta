import { ReactComponent as Facebook } from 'images/Facebook.svg'
import Instagram from 'images/Instagram.png'

export default function Footer() {
	const info = {
		title: 'Hierontapiste',
		address: {
			street: 'Kauppurienkatu 10',
			city: 'Oulu',
			postCode: '90100',
		},
		phoneNumber: '0404145767'
	}

	return (
		<footer>
			<p className='title'>{info.title}</p>
			<p>{info.address.street}, {info.address.postCode} {info.address.city}</p>
			<p>{info.phoneNumber}</p>

			<div className='icons'>
				<a href="https://www.facebook.com/camtu.nguyen.184007">
					<Facebook />
				</a>
				<a href="https://www.facebook.com/camtu.nguyen.184007">
					<img src={Instagram} width={24} alt="Instagram" />
				</a>
			</div>
		</footer>
	)
}
