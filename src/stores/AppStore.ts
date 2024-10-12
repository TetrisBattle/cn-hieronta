import { makeAutoObservable } from 'mobx'

export class AppStore {
	isDarkMode = false
	ajanvarausLinkki =
		'https://nettivaraus6.ajas.fi/fi/6a0d5e7c3a50?offices=3&employees=54&start_day=2024-10-14'
	address = 'Harjapäänkatu 33, 90400 Oulu'

	constructor() {
		makeAutoObservable(this)
	}

	toggleDarkMode = () => {
		this.isDarkMode = !this.isDarkMode
	}
}
