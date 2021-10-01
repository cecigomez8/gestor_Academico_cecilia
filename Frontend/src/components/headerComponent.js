import React, { Component } from 'react'
import {Dropdown,DropdownButton} from 'react-bootstrap'

//Importando Link para que no refresque la pantalla
import {Link} from 'react-router-dom';

class headerComponent extends Component {
  	constructor(props){
		super(props)
	}
	
	render() {
    	return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  					<div className="container	">
						<Link className="navbar-brand" to="/">Home</Link>
    					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
    					</button>
    				<div className="collapse navbar-collapse" id="navbarSupportedContent">
      					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        					<li class="nav-item">
									<Link className="navbar-brand" to="/admin">
									<DropdownButton id="dropdown-item-button" title="Administrador"> 
										<Dropdown.Item as="button">crear estudiante</Dropdown.Item>
										<Dropdown.Item as="button">crear programa</Dropdown.Item>
										<Dropdown.Item as="button">crear personas</Dropdown.Item>
										<Dropdown.Item as="button">crear profesor</Dropdown.Item>
										<Dropdown.Item as="button">elimina estudiantes </Dropdown.Item>
										<Dropdown.Item as="button">elimina profesor</Dropdown.Item>
										<Dropdown.ItemText>edita estudiantes </Dropdown.ItemText>
										<Dropdown.ItemText>edita profesor</Dropdown.ItemText>
									</DropdownButton>
									</Link>
        					</li>
        					<li class="nav-item">
									<Link className="navbar-brand" to="/student">
									<DropdownButton id="dropdown-item-button" title="Estudiantes"> 
										<Dropdown.ItemText> ver sus notas  </Dropdown.ItemText>
										<Dropdown.ItemText>ver sus asignaturas</Dropdown.ItemText>
										<Dropdown.Item as="button">ve programas</Dropdown.Item>
										<Dropdown.Item as="button">incribirse asignaturas</Dropdown.Item>
										<Dropdown.Item as="button">retirarse asignaturas</Dropdown.Item>
									</DropdownButton>
									</Link>
        					</li>
        					<li class="nav-item dropdown">
									<Link className="navbar-brand" to="/teachers">
									<DropdownButton id="dropdown-item-button" title="profesores"> 
										<Dropdown.Item as="button">ve sus asignaturas</Dropdown.Item>
										<Dropdown.Item as="button">ve asignaturas de estudiantes</Dropdown.Item>
										<Dropdown.Item as="button">elimina notas</Dropdown.Item>
										<Dropdown.ItemText>edita notas </Dropdown.ItemText>
										
									</DropdownButton>	
									</Link>
        					</li>
        					<li class="nav-item">
									<Link className="navbar-brand" to="/">
									<DropdownButton id="dropdown-item-button" title="Sobre nosotros"> 
										<Dropdown.Item as="button">crear estudiante</Dropdown.Item>
										<Dropdown.Item as="button">crear programa</Dropdown.Item>
										<Dropdown.Item as="button">crear personas</Dropdown.Item>
										<Dropdown.Item as="button">crear profesor</Dropdown.Item>
									</DropdownButton>
									</Link>
									
        					</li>
      					</ul>
      					<form class="d-flex">
        					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        					<button class="btn btn-outline-success" type="submit">Search</button>
      					</form>
    				</div>
  				</div>
			</nav>
		</div>
        );
  	}
}

export default headerComponent;
