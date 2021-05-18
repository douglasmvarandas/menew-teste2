import React, { useState } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';



const Page = () => {

    const [disabled, setDisabled] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        if(setDisabled === true) {
            alert("Preencha todos os Campos");
        } else {
            window.location.href = '/Usuários';
        }
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit} className="forms">
                
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input type="email" required disabled={disabled}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">CPF</div>
                            <div className="area--input">
                                <input type="text" id="cpf" name="cpf" disabled={disabled} required/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Fazer Login</button>
                            </div>
                        </label>
                    
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;