import React from 'react';

import Header from '../../components/Header';
import UserItem from '../../components/UserItem';

import './styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header name="Lucas" />
      <main>
        <UserItem name="David Lucas" email="lucas@menew.com.br" description="Hello World" job="Piloto" />
        <UserItem name="Gustavo Henrique" email="guga@menew.com.br" description="Python is a cute language for beginners" job="Instrutor de Programação" />
      </main>
    </div>
  );
}

export default Dashboard;