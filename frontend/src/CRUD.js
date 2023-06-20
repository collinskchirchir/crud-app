import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const CRUD = () => {
  const empData = [
    {
      id: 1,
      name: "Collo", 
      age: 23,
      isActive: 1
    },
    {
      id: 2,
      name: "Davis", 
      age: 25,
      isActive: 1
    },
    {
      id: 3,
      name: "Enock", 
      age: 18,
      isActive: 0
    },
  ]

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(empData)
  });
  
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>IsActive</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.length > 0 ?
          data.map((item, index) => {
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.isActive}</td>
              </tr>
            );
          })
          :
          'Loading...'
        }
        
      </tbody>
    </Table>
    </>
  )
}

export default CRUD;