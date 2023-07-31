import './Style.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiOutlineCheck} from 'react-icons/ai'

function Planes() {
    return(
        <section className='planes'>
            <h1>PLANES DE ENTRENAMIENTO</h1>
            <div className="planes-container">
                <Card style={{ width: '25rem' }}>
                    <Card.Header>Plan Inicial</Card.Header>
                    <ListGroup variant="flush" className='card-list-item'>
                        <ListGroup.Item className='card-list-item'>
                            <p>Plan Alimenticio</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Entrenamiento Personalizado</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Seguimiento Médico</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>1 vez por semana</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>$16.000</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#">Contratar</Card.Link>
                </Card>
                <Card style={{ width: '27rem' }}>
                    <Card.Header>Plan Premium</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item className='card-list-item'>
                            <p>Plan Alimenticio</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Entrenamiento Personalizado</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Seguimiento Médico</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>3 vez por semana</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>$20.000</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#">Contratar</Card.Link>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Header>Plan Profesional</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item className='card-list-item'>
                            <p>Plan Alimenticio</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Entrenamiento Personalizado</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Seguimiento Médico</p>
                            <AiOutlineCheck/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>5 vez por semana</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>$25.000</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#">Contratar</Card.Link>
                </Card>
            </div>
        </section>
    )
}
export default Planes