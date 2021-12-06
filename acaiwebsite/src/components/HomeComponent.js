import { react } from '@babel/types';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCard({item}) {
    return (
        <Card className="cardText">
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-2">
                    <RenderCard  item={props.acai} />
                </div>
                <div className="col-md m-2">
                    <RenderCard  item={props.promotion} />
                </div>
                <div className="col-md m-2">
                    <RenderCard  item={props.about} />
                </div>
            </div>
        </div>
    );
}


export default Home;   