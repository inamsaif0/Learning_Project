import { Table } from 'antd';
import React from 'react';
import { Card } from 'antd';
import axios from 'axios';
import {useQuery} from 'react-query';
import "./Viewpage.css"
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Category 1',
                value: 'Category 1',
            },
            {
                text: 'Category 2',
                value: 'Category 2',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.address.startsWith(value),
        width: '30%',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: <span>London</span>,
                value: 'London',
            },
            {
                text: <span>New York</span>,
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: '40%',
    },
];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//     },
//     {
//         key: '4',
//         name: 'Jim Red',
//         age: 32,
//         address: 'London No. 2 Lake Park',
//     },
// ];
async function fetchPosts() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    console.log(data);
    return data;
}
function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}


function App(){
const { data, error, isError, isLoading } = useQuery('todos', fetchPosts);
if(isLoading){
    return <div>Loading...</div>
}
if(isError){
    return <div>Error! {error.message}</div>
}

return(
    <div className="card">
        <Card title="View Detail" bordered={false} style={{ width: 1000 }} className="card_detail">
        <Table key={data[1].id} columns={columns} dataSource={data} onChange={onChange} />;
        </Card>
    </div>
    );
}

 export default App;