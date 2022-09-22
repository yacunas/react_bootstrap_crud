import React, {useState, useEffect} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import Boarders from './Boarders'
import { Link, useNavigate} from 'react-router-dom'


const Edit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Boarders.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Boarders[index];

        a.name = name;
        a.email = email;
        a.age = age;

        history('/');
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setAge(localStorage.getItem('age'));
        setId(localStorage.getItem('id'));
    }, []);

  return (
    <Container>
        <Link to='/'>
            <Button className='mb-5 mt-5' size='sm' variant="outline-secondary">Back</Button>
        </Link>
        <Form className='d-grid gap-2'>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Control type='text' placeholder='Enter Email' value={email} required onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAge'>
                <Form.Control type='text' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' onClick={(e) => handleSubmit(e)}>Update</Button>
        </Form>
    </Container>
  )
}

export default Edit