import React from 'react'
import { useState, useEffect } from 'react';
import { Alert, Col, Row } from 'react-bootstrap'

export const Newsletter = ({onValidated, status, message}) => {

    const [email, setEmail] = useState('');

    useEffect(()=>{
        if (status === 'success') {
            clearFields();
        }

    },[status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    };

    const clearFields = () => {
        setEmail='';
    };
  return (
    <Col lg={12}>
        <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Want to get my weekly reports?</h3>
                    {status ==='sending' && <Alert>Deploying....</Alert>}
                    {status ==='error' && <Alert variant='danger'>{message}</Alert>}
                    {status ==='success' && <Alert variant='success'>{message}</Alert>}
                </Col>
                <Col lg={12} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Col>


            </Row>
        </div>
    </Col>
  )
}
