import React, {useContext, useState, useEffect} from 'react';
import { Table,} from 'antd';
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
];

const data = [
    {
        "id": "test1",
        "username": "test2",
        "email": "test3"
    }
]

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