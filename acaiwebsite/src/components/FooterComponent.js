import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Links:</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Acai Bowls</Link></li>
                            <li><Link to='/aboutus'>Juices and Smoothies</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social Media</h5>
                        <br />
                        <a href="https://www.instagram.com/neighborhood_acai/?hl=en" class="btn btn-social-icon btn-instagram" target="_blank">
                            <i className="fa fa-instagram" />
                        </a>{' '}
                        <a href="https://www.facebook.com/neighborhoodacai/" class="btn btn-social-icon btn-facebook">
                            <i className="fa fa-facebook" />
                        </a>{' '}
                        <a href="https://www.yelp.com/biz/the-neighborhood-acai-and-juice-bar-paso-robles-4?osq=neighborhood+acai" class="btn btn-social-icon btn-facebook">
                            <i class="fa fa-yelp" />
                        </a>{' '}
                    </div>
                    
                    <div className="col-6 col-sm-3 text-center">
                        <h5>San Luis Obispo Location</h5>
                        <a role="button" className="btn btn-link" href="tel:+18054394033">
                            <i className="fa fa-phone" /> 
                            1-805-439-4033
                        </a>
                        <a href="https://www.google.com/maps/dir//973+Foothill+Blvd+%23107,+San+Luis+Obispo,+CA+93405/@35.2935749,-120.6711979,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80ecf0525f2fe277:0x31adb76c30e7f0de!2m2!1d-120.6690146!2d35.2935705!3e0" target="_blank">
                            <br />
                            <i class="fa fa-solid fa-address-book fa-md" />
                                973 E Foothill Blvd, Suite 107, 
                                <br/>
                                San Luis Obispo, CA 93405
                                <br/>
                        </a>
                    </div>

                    <div className="col-6 col-sm-3 text-center">
                        <h5>Paso Robles Location</h5>
                        <a role="button" className="btn btn-link" href="tel:+18053692119">
                            <i className="fa fa-phone" /> 
                            1-805-369-2119
                        </a>
                        <a href="https://www.google.com/maps/dir//811+13th+St,+Paso+Robles,+CA+93446/@35.6142251,-120.6955753,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80ecc55d4367b445:0x3531d243a5325a33!2m2!1d-120.6897891!2d35.6279326" target="_blank">
                            <br />
                            <i class="fa fa-solid fa-address-book fa-md" />
                                811 13th Street, 
                                <br />
                                Paso Robles, CA 93446
                                <br />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;