const actions = {
    EDIT_REQUEST: 'EDIT_REQUEST',

    editRequest: (id, nome, descricao, foto) => ({
        type: actions.EDIT_REQUEST,
        payload: {
            id,
            nome,
            descricao,
            foto,
        }
    }),
};

export default actions;