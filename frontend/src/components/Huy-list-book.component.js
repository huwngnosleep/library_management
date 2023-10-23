import React from 'react';
import { Table,} from 'antd';

const columns = [
  {
    title: 'Book name',
    dataIndex: 'bookname',
    key: 'bookname',
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
const data = [
  {
    key: '1',
    bookname: 'Đắc nhân tâm',
    genre: 'Tiểu thuyết',
    author: 'Nguyễn Quốc Huy',
    description: 'Là một cuốn sách phát triển bản thân hay nhất mọi thời đại',
  },
  {
    key: '2',
    bookname: 'Đắc nhân tâm',
    genre: 'Tiểu thuyết',
    author: 'Nguyễn Quốc Huy',
    description: 'Là một cuốn sách phát triển bản thân hay nhất mọi thời đại',
  },
  {
    key: '3',
    bookname: 'Đắc nhân tâm',
    genre: 'Tiểu thuyết',
    author: 'Nguyễn Quốc Huy',
    description: 'Là một cuốn sách phát triển bản thân hay nhất mọi thời đại',
  },
  {
    key: '4',
    bookname: 'Đắc nhân tâm',
    genre: 'Tiểu thuyết',
    author: 'Nguyễn Quốc Huy',
    description: 'Là một cuốn sách phát triển bản thân hay nhất mọi thời đại',
  },
  {
    key: '5',
    bookname: 'Đắc nhân tâm',
    genre: 'Tiểu thuyết',
    author: 'Nguyễn Quốc Huy',
    description: 'Là một cuốn sách phát triển bản thân hay nhất mọi thời đại',
  },
];
const Listbook = () => {

  return(

    <Table columns={columns} dataSource={data} />
  
  )
}
export default Listbook;