import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Spinner from '../Spinner';
import {
  ContentTable,
  Init,
  TableWrapper,
  TbHeadTr,
  TH,
  Wrapper
} from './styles';
import TableContent from './TableContent';

export interface DataIterface {
  profissional: string;
  especialidade: string;
}

export interface SpecialityInterface {
  unit: string;
  speciality: string;
}

export interface ColumnIterface<T, K extends keyof T> {
  Header: string;
  accessor?: K;
  element?: any;
  cell?: (item: T) => JSX.Element;
  width?: number;
}

interface PropsTable<T, K extends keyof T> {
  title?: string;
  noData?: string;
  titleButton?: string;
  header?: string[];
  data?: DataIterface[];
  dataImport?: Array<T>;
  columns?: ColumnIterface<T, K>[];
  link?: string;
  loading?: boolean;
}

const Table = <T, K extends keyof T>({
  data,
  noData,
  loading,
  titleButton,
  dataImport,
  columns,
  title,
  header,
  link,
}: PropsTable<T, K>): JSX.Element => {
  const { push } = useHistory();

  return (
    <Wrapper>
      {dataImport && (
        <ContentTable>
          <Init>
            <h1>{title}</h1>
            {titleButton ? (
              <Button onClick={() => push(`/app/${link}`)} className='btnDanger'>{titleButton}</Button>
            ):
            ''}
            
          </Init>
          <TableWrapper>
            <TbHeadTr>
              {columns.map(col => (
                <TH>{col.Header}</TH>
              ))}
            </TbHeadTr>

            <TableContent columns={columns} dataImport={dataImport} />
          </TableWrapper>
          {dataImport.length === 0 && !loading
            ? <p>{noData}</p> || <p>Nenhum Registro</p>
            : loading && (
            <p>
                  <Spinner />
                </p>
              )}
        </ContentTable>
      )}
    </Wrapper>
  );
};

export default Table;
