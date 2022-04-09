import GoogleMaps from "../components/GoogleMaps"

export default function Yhteystiedot() {
	return (
		<div className="Yhteystiedot">
			<div className="GoogleMaps">
			<GoogleMaps />
			</div>
			
			<div className="information">
				<p className="title">Muscus</p>
				<p>Otokuja 2, 90150 Oulu</p>
				<p>0402157957</p>
				<br />
				<p>Koulutettu hieroja</p>
				<p>CamTu Nguyen</p>
			</div>
		</div>
	)
}
