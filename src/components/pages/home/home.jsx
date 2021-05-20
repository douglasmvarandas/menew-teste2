import React from 'react'

export class Home extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return ( 
        <div className="base-container"ref={this.props.containerRef}>
            <div className="header">User</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deascricao">Descricao</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="foto">Foto</label>
                        <input type="foto" name="foto" placeholder="foto"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <span type="button" className="btn">
                    Sair
                </span>
            </div>
        </div>
        )
    }
}

export default Home;