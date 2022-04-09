import { Map, Marker, GoogleApiWrapper} from 'google-maps-react'
// import { compose, withProps } from "recompose";

function GoogleMapsContainer({ google }) {
	
	const center = {
		lat: 65.012093,
		lng: 25.465076
	}
	
	return (
		<Map
			google={google}
			zoom={15}
			initialCenter={center}
		>
			<Marker position={center} />
		</Map>
	)
}

const Wrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyB4Te_VbECF1CwENX07H01R0sa3YCX4mzU'
})(GoogleMapsContainer)

export default Wrapper
