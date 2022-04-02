import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import './styles.css';
import api from '../../services/api';

function Dashboard(props) {
    const [ redirect, setRedirect ]= useState(<div></div>);
    const [ itemsMenu, setItemsMenu ] = useState([]);
    
    useEffect(()=>{
        if (!props.location.state) return setRedirect(<Redirect to="/" />);

        else return api.get('/items').then(res =>setItemsMenu(res.data));
    },[props.location.state]);

    return (
        <div className="dashboard">
            <div className="card">
                <h1>Cardápio</h1>
                <div className="menu">
                    <table>
                        <tbody>
                        {itemsMenu.map((item,index) =>{
                            return(
                                <tr key={item.name+index}>
                                    <td>
                                        <img src={item.photo} alt={item.name} />
                                    </td>
                                    <td>
                                        <h1>{item.name}</h1>
                                        <p>{item.description}</p>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            {redirect}
        </div>
    )
}

export default Dashboard;