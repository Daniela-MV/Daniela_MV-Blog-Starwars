
const CardsPersonajes=({people})=> {
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
						<button type="button" className="btn btn-dark">Learn More</button>
						<button type="button" className="btn btn-dark"><i className="bi bi-heart" style={{color:"yellow"}} ></i></button>
						</div>
					</div>
			</div>
</div>
)}

export default CardsPersonajes;