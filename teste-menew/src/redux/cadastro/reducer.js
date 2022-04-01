import actions from './actions';
import { usuarios } from '../../data';

const initialState = {
    usuarios,
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.CADASTRO_REQUEST:
            const newUsuario = {
                nome: action.payload.nome,
                email: action.payload.email,
                cpf: action.payload.cpf,
            }
            console.log(newUsuario);
            return {
                usuarios: [...state.usuarios, newUsuario],
            };
        default:
            return state;
    }
}