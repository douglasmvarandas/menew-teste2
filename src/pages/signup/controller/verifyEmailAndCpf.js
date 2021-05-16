module.exports = {
    verifyEmail(data, email){
        var response = false;
        data.map(user => {
            if (user.email === email) return response = true;
            
            else  return false;
        });
        return response;
    },
    verifyCPF(data, cpf){
        var response = false;
        data.map(user => {
            if (user.cpf === cpf) return response = true;
            
            else   return false;
        });
        return response;
    }
};