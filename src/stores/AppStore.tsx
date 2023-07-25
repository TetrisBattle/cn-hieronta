import { makeAutoObservable } from 'mobx'

export default class AppStore {
	isDarkTheme = false
	isLoading = false
	headerHeight = 0
	footerHeight = 0

	constructor() {
		makeAutoObservable(this)
	}

	setHeaderHeight = (headerHeight: number) => {
		this.headerHeight = headerHeight
	}

	setFooterHeight = (footerHeight: number) => {
		this.footerHeight = footerHeight
	}

	toggleDarkTheme = () => {
		this.isDarkTheme = !this.isDarkTheme
	}

	setIsLoading(isLoading: boolean) {
		this.isLoading = isLoading
	}
}
