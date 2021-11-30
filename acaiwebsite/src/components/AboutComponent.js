import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderPartner({partner}) {
    if(partner) {
        return(
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                        <Media heading>
                            {partner.name}
                        </Media>
                        {partner.description}
                </Media>
            </React.Fragment> 
        );
    } else {
        return <div />;
    }
}


function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag='li' key={partner.id}>
                <RenderPartner partner={partner}/>
            </Media>
        );
    }); 

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                             Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Title Text</h3>
                    <p>Text.</p>
                </div>

                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>TITLE</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">1</dt>
                                <dd className="col-6">1A</dd>
                                <dt className="col-6">2</dt>
                                <dd className="col-6">2B</dd>
                                <dt className="col-6">3</dt>
                                <dd className="col-6">3B</dd>
                                <dt className="col-6">4</dt>
                                <dd className="col-6">4B</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>

                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">Text.</p>
                                <footer className="blockquote-footer">Author Name,{' '}
                                    <cite title="Source Title">"title" -
                                    Book, Year</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>TITLE 3</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>

        </div>
    );
}


export default About;