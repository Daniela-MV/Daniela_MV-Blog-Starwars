import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DescripcionVehiculos = () => {
    const { uid } = useParams(); 
    const [vehicles, setVehicles] = useState(null);

    function descriptionVehicles() {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(response => response.json())
            .then(data => {
                console.log(data.result.properties);
                setVehicles(data.result.properties);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        descriptionVehicles();
    }, [uid]);

    return (
        <div className="ContainerPersonaje">
            <h1 className="titulo ms-4 mt-4" style={{ color: "rgba(255, 219, 88, 1)" }}>Descripción del Personaje</h1>

            <div className="card mb-3 bg-dark" style={{ width: "100vw", height: "400px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/cazas-tie-star-wars-2299707.jpg?tf=3840x"
                             className="img-fluid rounded-start"
                             style={{ width: "100vw", height: "400px" }}
                             alt="Caza TIE" />
                    </div>
                    <div className="col-md-8">
                        <table className="table table-dark table-striped" style={{ height: "400px" }}>
                            <thead>
                                <tr>
                                    <th className="d-flex justify-content-center fs-4" style={{ width: "140px" }}>Propiedades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Nombre</th>
                                    <td>{vehicles?.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Modelo</th>
                                    <td>{vehicles?.model}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Manufactura</th>
                                    <td>{vehicles?.manufacturer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Capacidad de Carga</th>
                                    <td>{vehicles?.cargo_capacity}</td>
                                </tr>
                                 <tr>
                                    <th scope="row">Equipo</th>
                                    <td>{vehicles?.crew}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescripcionVehiculos;