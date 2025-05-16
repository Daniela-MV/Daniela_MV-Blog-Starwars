import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const Planets=({planetas})=>{
     const navigate = useNavigate();
	 const {store, dispatch}=useGlobalReducer();

	 const isFavorite = store.favorites?.some(fav => fav === planetas.name)

	 const favorite = () => {
		if (isFavorite === true) {
			const action = {
				type: "removeFavorite",
				payload: planetas.name
			}
			dispatch(action)
		} else {
			const action = {
				type: "newFavorite",
				payload: planetas.name
			}
			dispatch(action)
		}
	}


    return(
<div className="carta m-5">
    <div className="card" style={{backgroundColor:"white", width:"18rem"}}>
				<img src="https://i.ytimg.com/vi/1DMzGI0kP7M/maxresdefault.jpg" className="card-img-top" alt="" style={{height:"300px"}}/>
					<div className="card-body">
						<h5 className="card-title">{planetas.name}</h5>
						<p className="card-text" style={{color:"black"}}>
							<ul>
								<li><b>Población:</b> {planetas.population}</li>
								<li><b>Terreno:</b> {planetas.terrain}</li>
							</ul>
						</p>
						<div className= "d-flex justify-content-between">
						<button type="button" className="btn btn-dark" onClick={() => { navigate(`/descripción/planeta/${planetas.uid}`)}}>Descripción</button>
						<button type="button" className="btn btn-dark" onClick={favorite}>
							<i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}
								style={{ color: isFavorite ? "Yellow" : "white" }}
							></i></button>
						</div>
					</div>
			</div>
</div>
)};

export default Planets;
