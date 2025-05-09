
const Planets=({planetas})=>{
    return(
<div className="carta m-5">
    <div className="card" style={{backgroundColor:"white", width:"18rem"}}>
				<img src="https://i.ytimg.com/vi/1DMzGI0kP7M/maxresdefault.jpg" className="card-img-top" alt="" style={{height:"300px"}}/>
					<div className="card-body">
						<h5 className="card-title">{planetas.name}</h5>
						<p className="card-text" style={{color:"black"}}>
							<ul>
								<li>{planetas.population}</li>
								<li>{planetas.terrain}</li>
							</ul>
						</p>
						<div className= "d-flex justify-content-between">
						<button type="button" className="btn btn-dark">Learn More</button>
						<button type="button" className="btn btn-dark"><i className="bi bi-heart" style={{color:"yellow"}} ></i></button>
						</div>
					</div>
			</div>
</div>
)};

export default Planets;
