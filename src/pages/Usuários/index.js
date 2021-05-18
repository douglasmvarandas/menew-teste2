import React from 'react';
import { ListPage } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';


const ListPages = () => {

    const users = [
        { name: 'Paula Fernandes', info: '35 anos de idade, jogadora de Xadrez, empresária, e amante da natureza.', imgs: '/CptMarvel.png', id: 1 },
        { name: 'Pedro Fernandes', info: '22 anos de idade, sou físico nuclear formado na USP, e sou fascinado por Astronomia.', imgs: '/iron.jpg', id: 2 },
        { name: 'Joaquim Fernandes', info: '26 anos de idade, sou Desenvolvedor Junior, musicista e vegetariano.', imgs: '/Cpt.jpg', id: 3 }
    ];

    const listPages = users.map(user => <div className="lists"> <img width="150" height="130" src={user.imgs} key={users.imgs} alt={user.name}/><br /><span>Eu sou {user.name}!</span><p><br /> Eu tenho {user.info}</p></div>)
    return (
        <PageContainer>
            <PageTitle>Usuários</PageTitle>
            <ListPage> 
                <div className="list"><ul><li>{listPages}</li></ul></div>
            </ListPage>
             
        </PageContainer>
    );
}

export default ListPages;