import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DescripcionPersonajes = () => {
    const { name } = useParams()
    const [character, setCharacter] = useState()


    function descriptionCharacter() {
        fetch("https://www.swapi.tech/api/people/" + name)
            .then(response => response.json())
            .then(data => console.log(data.result.properties))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        descriptionCharacter()
    }, [])

    return (
        <div className="ContainerPersonaje">
            <h1 className="titulo ms-4 mt-4" style={{ color: "rgba(255, 219, 88, 1)" }}>Descripción del Personaje</h1>

            {/* Imagen y descripción */}
            <div className="card mb-3" style={{width: "100vw", height: "400px"}}>
                <div className="row g-0">
                     {/* Tabla con propiedades */}
                    <div className="col-md-4">
                        <img src="https://cdn.zendalibros.com/wp-content/uploads/2025/01/luke-skaywalker-star-wars.jpg" className="img-fluid rounded-start" style={{width: "100vw", height: "400px"}} alt="Luke Skywalker"/>
                    </div>
                    <div className="col-md-8">
                         <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                    </tr>
                </tbody>
            </table>
                        
                    </div>
                </div>
            </div>

        
           

        </div>

    )

}

export default DescripcionPersonajes;