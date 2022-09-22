import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import Boarders from './Boarders'
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';


const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [validated, setValidated] = useState(false);

    let history = useNavigate();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else{
            const ids = uuid();
            let uniqueId = ids.slice(0,8);

            let a = name, b = email, c = age;

            Boarders.push({id: uniqueId, name: a, email: b, age: c});
            history('/');
        }
        e.preventDefault();
        setValidated(true);

    }

  return (
    <div>
        <Container>
            <Link to='/'>
                <Button className='mb-5 mt-5' size='sm' variant="outline-secondary">Back</Button>
            </Link>
            <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className='d-grid gap-2'>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)}></Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control type='text' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control type='text' placeholder='Enter Age' required onChange={(e) => setAge(e.target.value)}></Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide a valid age.</Form.Control.Feedback>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    </div>
  )
}

export default Add