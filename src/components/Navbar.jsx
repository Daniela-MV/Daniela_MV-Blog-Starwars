import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
const {store, dispatch} = useGlobalReducer()



	return (
		<nav className="navbar" style={{backgroundColor: "black", width: "100%"}} >
			<div className="container">
				<Link to="/">
					<img className="imagenStarwars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png" alt="starwars" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="btn-group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos <i className="bi bi-star" style={{color: "yellow"}}></i>
							</button>
							<ul className="dropdown-menu">
								
								{/* corregir  */}
								{/* {store.favorites.map((value,index)=> {
					return(
                        <CardsPersonajes key={index} people={value} />
                        
						
					)
				})} */}
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};