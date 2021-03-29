import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types';

const initialState = {
    productos: [],
    hasError: null,
    isLoading: false,
    productoeliminar: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {

    switch (action.type) {

        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                isLoading: action.payload
            }

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                isLoading: false,
                productos: [ 
                    ...state.productos, 
                    action.payload
                ]
            }

        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: action.payload
            }

        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                isLoading: false,
                hasError: null,
                productos: action.payload
            }

        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoeliminar: action.payload
            }

        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }

        default:
            return state;

    }

}