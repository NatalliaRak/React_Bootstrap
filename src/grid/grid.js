/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridHeader from "./header_grid";
import Grid1 from './grid1';
import Grid2 from './grid2';
import Grid3 from './grid3';
import Grid4 from './grid4';
import Grid5 from './grid5';
import Grid6 from './grid6';


export default function Grid(){
 
    return(
        <><GridHeader /><Container fluid>
        <Row>
          <Col md={4}>
              <Grid1 />
          </Col>
          
          <Col md={4}>
            <Grid2 />
          </Col>
          <Col md={4}>
            <Grid3 />
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col md={4}>
              <Grid4 />
          </Col>
          <Col md={4}>
              <Grid5 />
          </Col>
          <Col md={4}>
              <Grid6 />
          </Col>


        </Row>

      </Container></>
    )
}