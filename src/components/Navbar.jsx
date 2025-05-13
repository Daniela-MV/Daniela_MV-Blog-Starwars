import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	const removeFavorite = (name) => {
		dispatch({
			type: "removeFavorite",
			payload: name
		});
	};

	return (
		<nav className="navbar" style={{ backgroundColor: "black", width: "100%" }}>
			<div className="container">
				<Link to="/">
					<img
						className="imagenStarwars"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png"
						alt="starwars"
					/>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favoritos <i className="bi bi-star" style={{ color: "yellow" }}>
							</i>
						</button>

						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites && store.favorites.length > 0 ? (
								store.favorites.map((fav, index) => (
									<li
										key={index}
										className="dropdown-item d-flex justify-content-between align-items-center"
									>
										<span>{typeof fav === 'string' ? fav : fav.name}</span>
										<button className="btn btn-sm btn-danger"
											onClick={() =>
												removeFavorite(typeof fav === 'string' ? fav : fav.name)
											}
										>
										</button>
									</li>
								))
							) : (
								<li>
									<span className="dropdown-item">No hay favoritos</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);

	// return (
	// 	<nav className="navbar" style={{ backgroundColor: "black", width: "100%" }} >
	// 		<div className="container">
	// 			<Link to="/">
	// 				<img className="imagenStarwars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png" alt="starwars" />
	// 			</Link>
	// 			<div className="ml-auto">
	// 				<Link to="/demo">
	// 					<div className="btn-group">
	// 						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
	// 							Favoritos<i className="bi bi-star" style={{ color: "yellow" }}></i>
	// 						</button>
	// 						<ul className="dropdown-menu">
	// 							{store.favorites && store.favorites.length > 0 ? (
	// 								store.favorites.map((fav, index) => (
	// 									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
	// 										{fav.name}
	// 										<button
	// 											className="btn btn-sm btn-danger ms-2"
	// 											onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: fav })}
	// 										>
	// 											🗑️
	// 										</button>
	// 									</li>
	// 								))
	// 							) : (
	// 								<li><span className="dropdown-item">No hay favoritos</span></li>
	// 							)}
	// 						</ul>
	// 			</div>
	// 		</Link>
	// 	</div>
	// 		</div >
	// 	</nav >
	// );
};