import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderAbout({about}) {
    if(about) {
        return(
            <React.Fragment>
                <Media object src={about.image} alt={about.name} width="150" />
                <Media body className="ml-5 mb-4">
                        <Media heading>
                            {about.name}
                        </Media>
                        {about.description}
                </Media>
            </React.Fragment> 
        );
    } else {
        return <div />;
    }
}


function About(props) {

    const abouts = props.abouts.map(about => {
        return (
            <Media tag='li' key={about.id}>
                <RenderAbout about={about}/>
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
                    <h2>Fresh Juice and Smoothies</h2>
                    <p>Made fresh to order.</p>
                    <hr />
                </div>
            </div>

            <div className="row row-content">
                <div className="col-sm-10">
                    <Card>
                        <CardHeader className="bg-success text-white">
                            <h3>Cold Pressed Juice </h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-10">Beet Juice</dt>
                                <dd className="col-10">Beets | Apple | Celery | Cilantro | Lime</dd>
                                <dt className="col-10">Celery Juice</dt>
                                <dd className="col-10">Kale | Spinach | Cucumber | Celery | Green Apple | Ginger | Lemon</dd>
                                <dt className="col-10">Citrus Detox Juice</dt>
                                <dd className="col-10"> Orange | Lemon | Pineapple | Turmeric | Cayenne Pepper </dd>
                                <dt className="col-10">Ginger Bliss Juice</dt>
                                <dd className="col-10"> Ginger | Red Apple | Green Apple | Lemon </dd>
                                <dt className="col-10">The Green Juice</dt>
                                <dd className="col-10">Kale | Spinach | Cucumber | Celery | Parsley | Lemon</dd>
                                <dt className="col-10">Watermelon Refresher Juice</dt>
                                <dd className="col-10">Watermelon | Mint | Lime | Camu Camu </dd>
                                <dt className="col-10">24 Carrot Juice</dt>
                                <dd className="col-10"> Carrot | Orange | Pineapple | Ginger | Turmeric | Lime | Cinnamon </dd>
                                <dt className="col-10">Charcoal Lavendar Lemonade</dt>
                                <dd className="col-10"> Activated Charcoal | Lavender | Lemon | Maple Syrup | Filtered H20 </dd>
                                <dt className="col-10">Sweet Greens</dt>
                                <dd className="col-10"> Celery | Pineapple | Pear | Cucumber | Kale | Spinach | Lime </dd>
                            </dl>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="bg-success text-white">
                            <h3>Freshly Prepared Smoothies </h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-10">Acai Berry Smoothie</dt>
                                <dd className="col-10"></dd>
                                <dt className="col-10">Strawberry Banana Smoothie</dt>
                                <dd className="col-10"> </dd>
                                <dt className="col-10">Peanut Butter Protein Smoothie </dt>
                                <dd className="col-10">  </dd>
                                <dt className="col-10">Spaghetti Smoothie</dt>
                                <dd className="col-10">  </dd>
                                <dt className="col-10">Kale and Papaya Smoothie</dt>
                                <dd className="col-10"> </dd>
                                <dt className="col-10">Best smoothie ever with lots of vegetables</dt>
                                <dd className="col-10"> </dd>
                                <dt className="col-10">Berry Bundle Smoothie</dt>
                                <dd className="col-10">  </dd>
                                <dt className="col-10">I Love Pineapple Smoothie</dt>
                                <dd className="col-10">  </dd>
                                <dt className="col-10">Mango Madness Smoothie</dt>
                                <dd className="col-10">  </dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}


export default About;