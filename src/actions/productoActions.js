import Swal from 'sweetalert2';

import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// Crear nuevo producto
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            await clienteAxios.post('/productos', producto);
            dispatch( agregarProductoExito(producto) );

            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );

        } catch (error) {
            dispatch( agregarProductoError(true) );

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al intentar guardar el producto'
            });
        }
    }
};

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});