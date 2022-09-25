import React from "react";
import Card from 'react-bootstrap/Card';
import map from '../scandinavian/denmark/map.png';
import NoteD from './notes/noteD';
import './card.css';


export default function cardI() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={map} />
      <Card.Body>
        <Card.Title>Denmark</Card.Title>
        <Card.Text className="text" style={{color:'black'}}>
          Some quick example text about Denmark to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

        <NoteD />

        
    </Card>
  );
}