import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditarAction } from '../../actions/productoActions';

export const Producto = ({producto}) => {

    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    // Confirmar si desea eliminar producto
    const confirmarEliminarProducto = (id) => {

        Swal.fire({
            title: 'Confirmas eliminar?',
            text: "El cambio es irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch( borrarProductoAction(id) );
            }
          })

    };

    const redirectEdicion = (producto) => {
        dispatch( obtenerProductoEditarAction(producto) );
        history.push(`/productos/editar/${producto.id}`);
    };

    return (
        <tr>

            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
                <button 
                    className="btn btn-primary mr-2"
                    onClick={ () => redirectEdicion(producto) }
                    type="button"
                >
                    Editar
                </button>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={ () => confirmarEliminarProducto(id) }
                >
                    Eliminar
                </button>
            </td>

        </tr>
    )
}
