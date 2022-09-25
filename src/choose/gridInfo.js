import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardN from "./cardN";
import CardF from './cardF';
import CardS from './cardS';
import CardI from './cardI';
import CardD from './cardD';




export default function GridInfo(){
 
    return(
        <><Container fluid>
        <Row>
          <Col>
              <CardN />
          </Col>     
          <Col>
               <CardF />
          </Col>
          <Col>
               <CardS />
          </Col>
          <Col>
               <CardI />
          </Col>
          <Col>
               <CardD />
          </Col>
        </Row>

      </Container></>
    )
}