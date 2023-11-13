import React, {useContext, useState, useEffect} from 'react';
import { Table, Button} from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
      },
    {
        title: 'User Name',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
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
    const res = await axios.post('http://localhost:5000/users/remove', {
      id: id,
    })
    if (res.status === 200) {
        alert('Success');
        window.location.reload()
    }
}

const ListUser = () => {
    const [data, setData] = useState([])
    async function fetchData() {
        const data = await (await axios.get('http://localhost:5000/users/')).data
        console.log({ data })
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
    <Table columns={columns} dataSource={data} pagination={{pageSize:8}}/>
  )
}
export default ListUser;    