import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumb from '../../../components/BreadCrumb';
import SubHeader from '../../../components/SubHeader';
import Table from '../../../components/Table';
import api from '../../../services/api';
import { CardWrapper } from './styles';

const Home: React.FC = () => {
  const [state, setState] = useState<any[]>([] as any[]);
  const [loading, setLoading] = useState<boolean>();
  
  const getData = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(
      `clients`
    );

    setLoading(false);
    setState(data);
  }, []);
  
  useEffect(() => {
    getData();
  }, [getData]);
 return (
   <>
  <SubHeader>
    <BreadCrumb
          items={[
            { text: 'Home', to: '/app' }
          ]}
          itemActual={{
            text: 'Clientes',
            to: '/app/client',
          }}
          isNext
        />
    </SubHeader>
    <CardWrapper>
   <Table
      title="Clientes"
      noData="Oops, Algo Errado"
      dataImport={state}
      loading={loading}
      columns={[
        { Header: 'Nome', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Cpf', accessor: 'document' }
      ]}
      link="app/client/new"
    />
    </CardWrapper>
   </>
   
 );
};

export default Home;