import React from 'react';

import Avatar from '../../assets/img/batman.jpg';

import './styles.css';

const UserItem = (props) => {
  const { name, email, description, job } = props;

  return (
    <article className="user-item">
      <header>
        <img src={Avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{email}</span>
        </div>
      </header>

      <p>{description}</p>

      <footer>
        <p>
          <strong>
          Função: {job}
          </strong>
        </p>
      </footer>
    </article>
  );
}

export default UserItem;