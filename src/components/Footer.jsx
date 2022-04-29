import React from 'react'

export default function Footer() {
	const info = {
		title: 'Rentolihas',
		address: {
			street: 'Otokuja 2 D 303',
			city: 'Oulu',
			postCode: '90150',
		},
		phoneNumber: '0402157957'
	}

	return (
		<footer>
			<p>{info.title}</p>
			<div>
				<p>{info.address.street}</p>
				<p>{info.address.postCode} {info.address.city}</p>
			</div>
			<p>{info.phoneNumber}</p>
		</footer>
	)
}
