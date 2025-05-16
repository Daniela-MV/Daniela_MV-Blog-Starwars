import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DescripcionPersonajes = () => {
    const { uid } = useParams(); 
    const [character, setCharacter] = useState(null);

    function descriptionCharacter() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(response => response.json())
            .then(data => {
                console.log(data.result.properties);
                setCharacter(data.result.properties);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        descriptionCharacter();
    }, [uid]);

    return (
        <div className="ContainerPersonaje">
            <h1 className="titulo ms-4 mt-4" style={{ color: "rgba(255, 219, 88, 1)" }}>Descripción del Personaje</h1>

            <div className="card mb-3 bg-dark" style={{ width: "100vw", height: "400px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.zendalibros.com/wp-content/uploads/2025/01/luke-skaywalker-star-wars.jpg"
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
                                    <td>{character?.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Género</th>
                                    <td>{character?.gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Color de pelo</th>
                                    <td>{character?.hair_color}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Color de ojos</th>
                                    <td>{character?.eye_color}</td>
                                </tr>
                                 <tr>
                                    <th scope="row">Altura</th>
                                    <td>{character?.height}</td>
                                </tr>
                                 <tr>
                                    <th scope="row">Año de cumpleaños</th>
                                    <td>{character?.birth_year}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescripcionPersonajes;