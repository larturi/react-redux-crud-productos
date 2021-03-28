import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

const initialState = {
    productos: [],
    hasError: null,
    isLoading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {

    switch (action.type) {

        case AGREGAR_PRODUCTO:
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
            return {
                ...state,
                isLoading: false,
                hasError: action.payload
            }

        default:
            return state;

    }

}