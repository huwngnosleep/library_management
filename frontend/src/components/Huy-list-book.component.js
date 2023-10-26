import React, {useContext, useState, useEffect} from 'react';
import { Table,} from 'antd';
import axios from 'axios';
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
const bookData = [{
  "name": "abc",
  "genre": "cc",
  "author": "cc",
  "description": "cc"
        
}]

const Listbook = () => {
    const [data, setData] = useState([])
    async function fetchData() {
        const data = await (await axios.get('http://localhost:5000/books/')).data
        console.log({ data })
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
  return(
    <Table columns={columns} dataSource={data} pagination = {{pageSize:8}}/>
  )
}
export default Listbook;