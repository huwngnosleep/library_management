import React, {useContext} from 'react';
import { Table,} from 'antd';
import { AppContext } from '../Context/AppContext';

const columns = [
  {
    title: 'Book name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];
const Listbook = () => {
  const {bookData} = useContext(AppContext);
  return(
    <Table columns={columns} dataSource={bookData} pagination = {{pageSize:8}}/>
  )
}
export default Listbook;