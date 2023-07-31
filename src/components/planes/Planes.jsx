import './Style.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiOutlineCheck} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'

function Planes() {
    return(
        <section className='planes'>
            <h1 >PLANES DE ENTRENAMIENTO</h1>
            <div className="planes-container">
                <Card className="card" style={{ width: '25rem' }}>
                    <Card.Header className='card-header'>Plan Inicial</Card.Header>
                    <ListGroup variant="flush" className='card-list-item'>
                        <ListGroup.Item className='card-list-item'>
                            <p>Plan Alimenticio</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Entrenamiento Personalizado</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Seguimiento Médico</p>
                            <MdCancel className='card-list-icon-cancel'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>1 vez por semana</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>$16.000</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#" className='btn btn-primary'>Contratar</Card.Link>
                </Card>
                <Card className="card" style={{ width: '27rem' }} id="planes">
                    <Card.Header className='card-header'>Plan Premium</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item className='card-list-item'>
                            <p>Plan Alimenticio</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Entrenamiento Personalizado</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Seguimiento Médico</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>3 vez por semana</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>$20.000</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#" className='btn btn-primary'>Contratar</Card.Link>
                </Card>
                <Card className="card" style={{ width: '25rem' }}>
                    <Card.Header className='card-header'>Plan Profesional</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item className='card-list-item'>
                            <p>Plan Alimenticio</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Entrenamiento Personalizado</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>Seguimiento Médico</p>
                            <AiOutlineCheck className='card-list-icon'/>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>5 vez por semana</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='card-list-item'>
                            <p>$25.000</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#" className='btn btn-primary'>Contratar</Card.Link>
                </Card>
            </div>
        </section>
    )
}
export default Planes