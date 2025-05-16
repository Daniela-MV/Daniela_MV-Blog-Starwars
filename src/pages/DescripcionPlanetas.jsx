import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DescripcionPlanetas = () => {
    const { uid } = useParams(); 
    const [planets, setPlanets] = useState(null);

    function descriptionPlanets() {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(response => response.json())
            .then(data => {
                console.log(data.result.properties);
                setPlanets(data.result.properties);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        descriptionPlanets();
    }, [uid]);

    return (
        <div className="ContainerPersonaje">
            <h1 className="titulo ms-4 mt-4" style={{ color: "rgba(255, 219, 88, 1)" }}>Descripción de los Planetas</h1>

            <div className="card mb-3 bg-dark" style={{ width: "100vw", height: "400px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://media.airedesantafe.com.ar/p/2940eadd4dd2a7bf6b3cfcc8d9e9132d/adjuntos/268/imagenes/003/795/0003795433/1200x675/smart/el-planeta-que-no-deberia-existir-y-cambia-todo-lo-conocido-el-universo.png"
                             className="img-fluid rounded-start"
                             style={{ width: "100vw", height: "400px" }}
                             alt="Luke Skywalker" />
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
                                    <td>{planets?.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Población</th>
                                    <td>{planets?.population}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Clima</th>
                                    <td>{planets?.climate}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Diametro</th>
                                    <td>{planets?.diameter}</td>
                                </tr>
                                 <tr>
                                    <th scope="row">Superficie de agua</th>
                                    <td>{planets?.surface_water}</td>
                                </tr>
                                 <tr>
                                    <th scope="row">Terreno</th>
                                    <td>{planets?.terrain}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescripcionPlanetas;