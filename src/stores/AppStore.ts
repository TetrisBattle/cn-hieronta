import { makeAutoObservable } from 'mobx'

export class AppStore {
	isDarkMode = false

	constructor() {
		makeAutoObservable(this)
	}

	toggleDarkMode = () => {
		this.isDarkMode = !this.isDarkMode
	}
}
