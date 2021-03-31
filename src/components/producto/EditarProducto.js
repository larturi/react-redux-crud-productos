import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { editarProductoAction } from '../../actions/productoActions';

export const EditarProducto = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ producto, setProducto ] = useState({
        nombre: '',
        precio: ''
    });

    const productoEditar = useSelector(state => state.productos.productoeditar); 
    
    useEffect(() => {
        setProducto(productoEditar);
    }, [productoEditar]);

    const { precio, nombre } = producto;

    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch( editarProductoAction(producto) );
        history.push('/');
    };

    const onChangeFormulario = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
