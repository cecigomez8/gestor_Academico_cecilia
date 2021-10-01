import React, { Component } from 'react';

import FormCrearpersona from './formCrearPersona';


class AdminComponent extends Component {
  constructor(props){
      super(props)

      this.state = {
        mostrarEsconderFormulario: false
      }
      this.mostrarEsconderFormulario = this.mostrarEsconderFormulario.bind(this);
      this.mostrarEsconderFormulario_2 = this.mostrarEsconderFormulario_2.bind(this);
  }

  mostrarEsconderFormulario(){
    this.setState({mostrarEsconderFormulario: !this.state.mostrarEsconderFormulario})
  }

  mostrarEsconderFormulario_2(){
    const mostrar = this.state.mostrarEsconderFormulario;
    if(mostrar == true){
      return(
        <div>
          <FormCrearpersona tipo="tipo1" />
        </div>
        
      )
    }
    else{
      return(
        <div>
          Se cerró el formulario
        </div>
      )
    }
  }

  

  render() {
    return (
    <div class="container">
      <div class="row">
        <button onClick={() => this.setState({mostrarEsconderFormulario: !this.state.mostrarEsconderFormulario})}>
          Formulario crear persona
        </button>
      </div>   
      {this.mostrarEsconderFormulario_2()}
    </div>
    
    )
  }
}

export default AdminComponent;
