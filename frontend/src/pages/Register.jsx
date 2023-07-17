import React, {useState,useContext} from 'react';
import { Container, Row , Col, Form, FormGroup, Button} from 'reactstrap';

import {Link,useNavigate} from 'react-router-dom';
import '../styles/login.css'
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext.js';
import { BASE_URL } from '../utils/config.js';
const Register = () => {
  const [mobile, setmobile] = useState("");
  const [isError, setIsError] = useState(false);
  const [credentials, setCredentials] = useState ({
    firstname:undefined,
    lastname:undefined,
    city:undefined,
    mobilenumber : undefined,
   userName:undefined,
    email:undefined,
   password:undefined

  });
  const {dispatch} = useContext(AuthContext)
  const navigate= useNavigate()
  const handleChange = e =>{
    
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };
  const handleClick = async e => {
     e.preventDefault();
     
     try{
      const res= await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()
      if(!res.ok) alert(result.message)
      else{
      alert("account successfully created")
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')}
     }
     catch(err){
        alert(err.message)
     }


  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt='' />
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt=''/>
                </div>
              
              <h2>Register</h2 >
              <Form onSubmit = {handleClick}>
              <FormGroup>
                  <input type="text" placeholder='FirstName' required id="firstname" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder='LastName' required id="lastname" onChange={handleChange}/>
                </FormGroup>
                <FormGroup >
                  <input type= 'number' value={mobile}  required id="mobilenumber" 
       
        onChange={(e) => {
         
          if (e.target.value.length > 10) {
         
            setIsError(true);
            alert("Number length reached 10");
            
          }
          else{
            setmobile(e.target.value);
          }
        }}  placeholder='Mobile Number' />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder='City' required id="city" onChange={handleChange}/>
                </FormGroup>
              <FormGroup></FormGroup>
              <FormGroup>
                  <input type="text" placeholder='Username' required id="username" onChange={handleChange}/>
                </FormGroup>
              <FormGroup>
                  <input type="email" placeholder='Email' required id="email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id="password" onChange={handleChange}/>
                </FormGroup>
              <Button className='btn secondary__btn auth__btn' type="submit" > Register 

               </Button></Form>
               <p>Already have an account ? <Link to='/login'>Login</Link> </p>
                
              
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;