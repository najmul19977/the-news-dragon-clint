import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useTitle from '../../../../hooks/useTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted,SetAccepted] =useState(false);
    useTitle('Register Page');

    const handleRegister = (event) =>{
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result =>{
            const  createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    const handleAccepted = event =>{
        SetAccepted(event.target.checked)
    }
    return (
        <Container className=' w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter You Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" name='accept' 
                    label={<>Accept <Link to="/terms">Terms and Condition</Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button> <br />
                <Form.Text className="text-success">
                    Already Have An Account <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;