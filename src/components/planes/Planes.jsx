import './Style.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Planes() {
    return(
        <section className='planes-container'>
            <Card style={{ width: '25rem' }}>
                <Card.Header>Plan Básico</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>item 1</ListGroup.Item>
                    <ListGroup.Item>item 2</ListGroup.Item>
                    <ListGroup.Item>item 3</ListGroup.Item>
                    <ListGroup.Item>item 4</ListGroup.Item>
                    <ListGroup.Item>item 5</ListGroup.Item>
                </ListGroup>
                <Card.Link href="#">Contratar</Card.Link>
            </Card>
            <Card style={{ width: '27rem' }}>
                <Card.Header>Plan Intermedio</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>item 1</ListGroup.Item>
                    <ListGroup.Item>item 2</ListGroup.Item>
                    <ListGroup.Item>item 3</ListGroup.Item>
                    <ListGroup.Item>item 4</ListGroup.Item>
                    <ListGroup.Item>item 5</ListGroup.Item>
                </ListGroup>
                <Card.Link href="#">Contratar</Card.Link>
            </Card>
            <Card style={{ width: '25rem' }}>
                <Card.Header>Plan Avanzado</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>item 1</ListGroup.Item>
                    <ListGroup.Item>item 2</ListGroup.Item>
                    <ListGroup.Item>item 3</ListGroup.Item>
                    <ListGroup.Item>item 4</ListGroup.Item>
                    <ListGroup.Item>item 5</ListGroup.Item>
                </ListGroup>
                <Card.Link href="#">Contratar</Card.Link>
            </Card>
        </section>
    )
}
export default Planes