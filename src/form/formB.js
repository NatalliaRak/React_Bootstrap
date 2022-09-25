import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function FormB() {
    const style={
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        margin: '5% 20%',
        padding: '7%'
    }
  return (
    <div style={style}>
    <Form>
        <h3 style={{color: 'grey'}}>Write us a message!</h3>
        <Form.Group md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter name"              />
        </Form.Group>
        <br/><br/>
        <Form.Group md="4"  
                    controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" />
            <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                </Form.Text>
        </Form.Group>
        <br/><br/>
        <FloatingLabel
            controlId="floatingTextarea"
            label="Message"
            md="4" 
        >
            <Form.Control 
                as="textarea" 
                placeholder="Leave a comment here" />
        </FloatingLabel>
        <br/><br/>
        <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}