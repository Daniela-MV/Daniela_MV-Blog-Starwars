import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardsPersonajes = ({ people }) => {

	const navigate = useNavigate()
	const { store, dispatch } = useGlobalReducer()

	const isFavorite = store.favorites?.some(fav => fav === people.name)

	const favorite = () => {
		if (isFavorite === true) {
			const action = {
				type: "removeFavorite",
				payload: people.name
			}
			dispatch(action)
		} else {
			const action = {
				type: "newFavorite",
				payload: people.name
			}
			dispatch(action)
		}
	}

	return (
		<div className="carta m-5">
			<div className="card" style={{ backgroundColor: "white", width: "18rem" }}>
				<img src="https://www.uv.es/loferma2/images/wi.jpg" className="card-img-top" alt="" style={{ height: "300px" }} />
				<div className="card-body">
					<h5 className="card-title">{people.name}</h5>
					<p className="card-text" style={{ color: "black" }}>
						<ul>
							<li><b>Género:</b>  {people.gender}</li>
							<li><b>Color de cabello:</b> {people.hair_color}</li>
							<li><b>Color de ojos:</b>  {people.eye_color}</li>
						</ul>
					</p>
					<div className="d-flex justify-content-between">
						<button type="button" className="btn btn-dark" onClick={() => { navigate(`descripción/personaje/${people.uid}`) }}>Descripción</button>
						<button type="button" className="btn btn-dark" onClick={favorite}>
							<i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}
								style={{ color: isFavorite ? "Yellow" : "white" }}
							></i>
						</button>

					</div>
				</div>
			</div>
		</div>
	)
}

export default CardsPersonajes;