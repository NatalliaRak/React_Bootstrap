import React from "react";
import Card from 'react-bootstrap/Card';
import map from '../scandinavian/norway/map.png';
import NotesN from './notes/noteN';
import './card.css';


export default function CardN() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={map} />
      <Card.Body>
        <Card.Title>Norway</Card.Title>
        <Card.Text className="text" style={{color:'black'}}>
          Some quick example text about Norway to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <NotesN />
        
    </Card>
  );
}