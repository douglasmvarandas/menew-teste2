import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';

const UserDetail = () => {
  return (
    <dvi className="user-detail-container">
      <Header name="David Lucas" />
      <main>
        <Search  />
      </main>
    </dvi>
  );
}

export default UserDetail;