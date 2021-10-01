import React from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form'


function Footer(props){
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/admin">Adminstrador</Link></li>
                        <li><Link to="/teacher">Profesor</Link></li>
                        <li><Link to="/student">Estudiantes</Link></li>
                        <li><Link to="/">Sobre nosotros</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Su dirección<br />
		              Barrio<br />
		              Cali<br />
		              <i className="fa fa-phone fa-lg"></i>: 3024304022 1<br />
		              <i className="fa fa-fax fa-lg"></i>: 3217075189o 2<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         esteicygomez.8@qmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                <img src={"noch.png"} className="cecilia"/>
                    <p>© Copyright 2021 Universidad de la Calle</p>
                </div>
                <>
  <Form.Label htmlFor="exampleColorInput">Color pink</Form.Label>
  <Form.Control
    type="color"
    id="exampleColorInput"
    defaultValue="#563d7c"
    title="Choose your color"
  />
</>
            </div>
        </div>
    </div>
    );
}


export default Footer;