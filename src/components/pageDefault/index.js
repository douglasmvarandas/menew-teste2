import React from 'react';
import Navbar from '../navbar';
import './styles.css'

function PageDefault(props) {
    return (
        <div className="main">
            {props.children}
            <Navbar user={props.location.state} />
        </div>
    )
}

export default PageDefault;