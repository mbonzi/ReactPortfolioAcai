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
            <div className="row row-content align-items-center">
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

            <div className="row row-content align-items-center">
                <div className="col-xs-12 col-md-10 m-4">
                    <RenderCard  item={props.homeInfo} />
                </div>
            </div>
        </div>
    );
}

export default Home;   