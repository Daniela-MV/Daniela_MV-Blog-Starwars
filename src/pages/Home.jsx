
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="carta m-5">
			<div className="card" style={{backgroundColor:"rgba(247,201,62)", width:"18rem"}}>
				<img src="https://www.uv.es/loferma2/images/wi.jpg" className="card-img-top" alt="" style={{height:"300px"}}/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
						<div className= "d-flex justify-content-between">
						<button type="button" className="btn btn-dark">Learn More</button>
						<button type="button" className="btn btn-dark"><i className="bi bi-heart" style={{color:"yellow"}} ></i></button>
						</div>
					</div>
			</div>
		</div>
	);
}; 