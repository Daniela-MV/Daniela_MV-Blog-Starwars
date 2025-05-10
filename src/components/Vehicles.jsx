
const Vehicles=({vehiculo})=>{
    return(
<div className="carta m-5">
    <div className="card" style={{backgroundColor:"white", width:"18rem"}}>
				<img src="https://i.blogs.es/e8942b/millennium-falcon/450_1000.jpg" className="card-img-top" alt="" style={{height:"300px"}}/>
					<div className="card-body">
						<h5 className="card-title">{vehiculo.name}</h5>
						<p className="card-text" style={{color:"black"}}>
							<ul>
								<li>{vehiculo.model}</li>
								<li>{vehiculo.manufacturer}</li>
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

export default Vehicles;
