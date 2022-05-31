import { ReactComponent as Facebook } from 'images/Facebook.svg'
import { ReactComponent as Twitter } from 'images/Twitter.svg'

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
			<p>{info.title}</p>
			<div>
				<p>{info.address.street}</p>
				<p>{info.address.postCode} {info.address.city}</p>
			</div>
			<p>{info.phoneNumber}</p>
			<div>
				<a href="https://www.facebook.com/camtu.nguyen.184007">
					<Facebook />
				</a>
				<a href="https://www.facebook.com/camtu.nguyen.184007">
					<Twitter />
				</a>
			</div>
		</footer>
	)
}
