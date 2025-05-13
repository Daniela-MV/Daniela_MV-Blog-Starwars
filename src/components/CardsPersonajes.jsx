import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardsPersonajes=({people})=> {

	const navigate=useNavigate()
	const {store, dispatch}=useGlobalReducer()

	const isFavorite = store.favorites?.includes(people.name)
	const favorite=()=>{
		if (isFavorite === true){
			const action={
				type: "removeFavorite",
				payload: people.name
			}
			dispatch(action)
		} else{
			const action={
				type: "newFavorite",
				payload: people.name
			}
			dispatch(action)
		}
	}

    return(
<div className="carta m-5">
    <div className="card" style={{backgroundColor:"white", width:"18rem"}}>
				<img src="https://www.uv.es/loferma2/images/wi.jpg" className="card-img-top" alt="" style={{height:"300px"}}/>
					<div className="card-body">
						<h5 className="card-title">{people.name}</h5>
						<p className="card-text" style={{color:"black"}}>
							<ul>
								<li>{people.gender}</li>
								<li>{people.hair_color}</li>
								<li>{people.eye_color}</li>	
							</ul>
						</p>
						<div className= "d-flex justify-content-between">
						<button type="button" className="btn btn-dark" onClick={()=>{navigate(`descripción/personaje/${people.name}`)}}>Descripción</button>
						<button type="button" className="btn btn-dark" onClick={favorite}><i className="bi bi-heart" style={{color:"yellow"}} ></i></button>
						</div>
					</div>
			</div>
</div>
)}

export default CardsPersonajes;