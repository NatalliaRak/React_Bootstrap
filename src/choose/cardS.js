import React from "react";
import Card from 'react-bootstrap/Card';
import map from '../scandinavian/sweden/map.png';
import NotesS from './notes/noteS';
import './card.css';


export default function cardS() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={map} />
      <Card.Body>
        <Card.Title>Sweden</Card.Title>
        <Card.Text className="text" style={{color:'black'}}>
          Some quick example text about Sweden to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

        <NotesS />
        
    </Card>
  );
}