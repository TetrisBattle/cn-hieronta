import { createContext } from 'react'
import { makeAutoObservable } from 'mobx';
import Home from 'pages/Home'
import Services from 'pages/Services'

// const pages = [
// 	{
// 		title: 'Etusivu',
// 		path: '/Etusivu',
// 		element: <Home />
// 	},
// 	{
// 		title: 'Palvelut',
// 		path: '/Palvelut',
// 		element: <Services />
// 	}
// ]

class RootStore {
	constructor() {
		this.pages = [
			{
				title: 'Etusivu',
				path: '/Etusivu',
				element: <Home />
			},
			{
				title: 'Palvelut',
				path: '/Palvelut',
				element: <Services />
			}
		]
		this.activePage = this.pages[0].path
		makeAutoObservable(this)
	}

	setActivePage(newActivePage) {
		rootStore.activePage = newActivePage
	}
}

const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)

export default function DataProvider({ children }) {

	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}
