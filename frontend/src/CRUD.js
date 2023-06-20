import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CRUD = () => {
  // Emp State Objects
  const[name, setName] = useState('');
  const[age, setAge] = useState('');
  const[isActive, setIsActive] = useState(0);

  const[editId, setEditId] = useState('');
  const[editName, setEditName] = useState('');
  const[editAge, setEditAge] = useState('');
  const[editIsActive, setEditIsActive] = useState(0);
   
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



  // modal handlers
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 

  const handleEdit = (id) => {
    handleShow();
  }
  const handleDelete = (id) => {
    if(window.confirm("Are you sure to DELETE this employee?") === true){
        alert(id);
      }
  }
  const handleUpdate = () => {

  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <input type='text' className='form-control' placeholder='Enter Name' 
              value={name} onChange={(e) => setName(e.target.value)}/>
          </Col>
          <Col>
            <input type='text' className='form-control' placeholder='Enter Age' 
              value={age} onChange={(e) => setAge(e.target.value)}/>
          </Col>
          <Col>
            <input type='checkbox' 
              checked={isActive === 1 ? true : false} 
              onChange={(e) => setIsActive(e)}
              value={isActive}/>
            <label>IsActive</label>
          </Col>
          <Col>
            <button className='btn btn-primary'>Update</button>
          </Col>
        </Row>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>IsActive</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.length > 0 ?
            data.map((item, index) => {
              return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.isActive}</td>
                  <td colSpan={2}>
                    <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
            :
            'Loading...'
          }
          
        </tbody>
      </Table>

        {/* Modal component */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form */}
          <Row>
          <Col>
            <input type='text' className='form-control' placeholder='Enter Name' 
              value={editName} onChange={(e) => setEditName(e.target.value)}/>
          </Col>
          <Col>
            <input type='text' className='form-control' placeholder='Enter Age' 
              value={editAge} onChange={(e) => setEditAge(e.target.value)}/>
          </Col>
          <Col>
            <input type='checkbox' 
              checked={editIsActive === 1 ? true : false} 
              onChange={(e) => setEditIsActive(e)}
              value={editIsActive}/>
            <label>IsActive</label>
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default CRUD;