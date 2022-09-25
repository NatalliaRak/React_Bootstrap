import React from "react";
import Card from 'react-bootstrap/Card';
import './card.css';
import map from '../scandinavian/finland/map.png';
import NotesF from './notes/noteF'


export default function CardN() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={map} />
      <Card.Body>
        <Card.Title>Finland</Card.Title>
        <Card.Text className="text" style={{color:'black'}}>
          Some quick example text about Finland to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <NotesF />
    </Card>
  );
}