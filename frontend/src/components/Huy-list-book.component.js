import React, {useContext, useState, useEffect} from 'react';
import { Table, Button} from 'antd';
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
  {
    title: 'Action',
    render: (text, record) => (
     <Button danger onClick={()=> onDelete(record._id)}>
       {"Delete"}
     </Button>
    ),
},
];

async function onDelete(id) {
  const res = await axios.post('http://localhost:5000/books/remove', {
    id: id,
  })
  if (res.status === 200) {
      alert('Success');
      window.location.reload()
  }
}

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