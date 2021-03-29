import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../../actions/productoActions';
import { Producto } from './Producto';

export const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const cargarProductos = () => dispatch( obtenerProductosAction() );

        cargarProductos();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Obtener el state
    const productos = useSelector(state => state.productos.productos);
    const hasError = useSelector(state => state.productos.hasError);
    const isLoading = useSelector(state => state.productos.isLoading);

    return (
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>

            { hasError ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
            { isLoading ? <p className="text-center mt-4">Caargando...</p> : null }

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    { productos.length === 0 ? <tr><td colSpan="3" className="text-center">No hay productos</td></tr> : (
                        productos.map( producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}
