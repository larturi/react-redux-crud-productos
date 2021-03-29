import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../../actions/productoActions';

export const Producto = ({producto}) => {

    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();

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

    return (
        <tr>

            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
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
