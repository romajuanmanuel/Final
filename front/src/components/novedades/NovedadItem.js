import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    const divStyle = {
        margin: '40px',
    };
    return (
        <div className="holder">
            <div className="row">
                <div className="text-center" style={divStyle}>
                    <Col>
                        <Card>
                            <Card.Title><h2>{title}</h2></Card.Title>
                            <Card.Img src={imagen} />
                            <Card.Body>
                                <Card.Text>
                                    <h2>{subtitle}</h2>
                                    <h3 dangerouslySetInnerHTML={{ __html: body }} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default NovedadItem;