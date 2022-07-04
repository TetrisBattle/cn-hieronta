import { makeAutoObservable } from 'mobx'

export default class AppStore {
	private _isDarkTheme = false
	private _isLoading = false

	constructor() {
		makeAutoObservable(this)
	}

	get isDarkTheme() {
		return this._isDarkTheme
	}

	toggleDarkTheme = () => {
		this._isDarkTheme = !this._isDarkTheme
	}

	get isLoading() {
		return this._isLoading
	}

	toggleLoading = () => {
		this._isLoading = !this._isLoading
	}
}
