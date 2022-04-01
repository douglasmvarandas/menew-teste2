/* eslint-disable eqeqeq */
import actions from './actions';
import { produtos } from '../../data'

const initialState = {
    produtos,
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.EDIT_REQUEST:
            const index = state.produtos.findIndex(produto => produto.id == action.payload.id);
            const newProduto = {
                id: action.payload.id,
                nome: action.payload.nome,
                descricao: action.payload.descricao,
                foto: action.payload.foto,
            }
            const newProdutos = [...state.produtos];
            newProdutos[index] = newProduto;

            return {
                ...state,
                produtos: newProdutos,
            };
        default:
            return state;
    }
}