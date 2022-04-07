import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import welcome from 'welcome.jpg';

//security
import {auth} from 'libs/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {ToastContainer, toast } from 'react-toastify';
import {BiMessageSquareError} from 'react-icons/bi';
import 'react-toastify/dist/ReactToastify.css';



function LoginPage  (props){
    //window.location.assign('page.html')
    //router navigate to a path (/home/index dashboard)
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const naviToDashboard = useNavigate();
    //console.log(email);

    const alert = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon:<BiMessageSquareError />
  
    });


    function onHandleSubmit(evt) {
        evt.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(userIdentity => naviToDashboard('dashboard')).catch(error => alert(error));
        
    }

    
    
    
    return( 
        
        <Container >
            <ToastContainer />
            <Row className='shadow-1-strong p-5 my-5' style={ {backgroundColor: "#E8EAF6"} }>
                <Col className='p-5 border border-light ' style={ {backgroundColor: "#EEEEEE"} } >
                    <Row className='justify-content-md-center'>
                        <Col md="auto"><h1 className='my-4' style={ {fontSize:"3rem"} }>Sign In to DashBoard</h1></Col>
                        
                    </Row>
                    
                    <Form onSubmit={onHandleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email to login" onChange={(evt)=> setEmail(evt.target.value)} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(evt)=> setPassword(evt.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Login!
                        </Button>
                    </Form>
                    <Row className='my-4'>
                        <Col><Link className='link-info' to="/#">Forgot Password?</Link></Col>
                        <Col>New user? <Link className='link-info' to="/#"> Sing up!</Link></Col>
                    </Row>
                    
                </Col>
                <Col className='border border-light' style={ {backgroundColor: "#ddd2cc"} }>
                    <img src={welcome} className='img-fluid' alt='welcome' />
                </Col>
            </Row>
            
            
        </Container>

    )

}

export default LoginPage; 