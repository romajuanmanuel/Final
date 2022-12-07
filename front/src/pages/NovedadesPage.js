import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <div className="text-center">
            <section className="holder" >
                <h2>Productos</h2>
                {
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => <NovedadItem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            imagen={item.imagen} body={item.cuerpo} />)
                    )
                }
            </section>
        </div>
    )
};

export default NovedadesPage;

/*<div className="historia">
            <main className="holder">
                <div className="columnas">
                    <section className="bienvenidos">
                      
                    </section>
                </div>
            </main>
        </div>*/