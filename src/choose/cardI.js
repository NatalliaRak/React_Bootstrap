import React from "react";
import Card from 'react-bootstrap/Card';
import map from '../scandinavian/iceland/map.png';
import NoteI from './notes/noteI';
import './card.css';


export default function cardI() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={map} />
      <Card.Body>
        <Card.Title>Iceland</Card.Title>
        <Card.Text className="text" style={{color:'black'}}>
          Some quick example text about Iceland to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <NoteI />
        
    </Card>
  );
}