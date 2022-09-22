import React, {useState} from 'react';
import { Modal, Button, Container, Table} from 'react-bootstrap';
import Boarders from './Boarders';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    let history = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setId(id);
        setShow(true);
    }

    const handleDelete = () => {
        var index = Boarders.map(function(e){
            return e.id
        }).indexOf(id);

        Boarders.splice(index, 1);
        history('/');
        handleClose();
    }

    const handleEdit = (id, name, email, age) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('age', age);
    }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    <Container className='mt-5'>
        <h2 className='text-center mb-4'>Yacunas Boardinghouse</h2>
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    Boarders && Boarders.length > 0 ? Boarders.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td className='d-flex justify-content-center'>
                                    <Link to='/edit'>
                                        <Button variant='outline-success' onClick={()=> handleEdit(item.id, item.name, item.email, item.age)}>Edit</Button>                                        
                                    </Link>
                                    &nbsp;
                                    <Button variant='outline-danger' onClick={()=> handleShow(item.id)}>Delete</Button>                                
                                </td>
                            </tr>
                        )
                    }):<h6>No data available</h6>
                    
                }
            </tbody>
        </Table>
        <br />
        <Link className='d-grid gap-2' to='/create'>
            <Button size='lg'>Create</Button>
        </Link>
        </Container>
    </>
  )
}

export default Home;