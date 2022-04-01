const actions = {
    CADASTRO_REQUEST: 'CADASTRO_REQUEST',

    cadastroRequest: (nome, email, cpf) => ({
        type: actions.CADASTRO_REQUEST,
        payload: {
            nome,
            email,
            cpf,
        }
    }),
};

export default actions;