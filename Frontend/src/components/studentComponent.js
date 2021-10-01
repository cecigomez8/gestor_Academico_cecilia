import React, { Component } from 'react'
import FormCrearpersona from './formCrearPersona';
import axios from 'axios';


class studentComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
    mostrar: false
  }
    this.mostrarEsconderFormulario = this.mostrarEsconderFormulario.bind(this)
    this.changeVar_1 = this.changeVar_1.bind(this);
  }

  mostrarEsconderFormulario(){
    this.setState({mostrar: !this.state.mostrarEsconderFormulario})
  }

  async changeVar_1 () {
    const res = await axios.get('http://localhost:4000/api/admin/getAdmins');
    this.setState({admin:res.data[0]});
  };


  
  
  render() {
    return (
      <div class="container">
        <div class="row">
        <button onClick={this.mostrarEsconderFormulario}>
          Formulario crear persona
        </button>
      </div>   
      {this.state.mostrar ? <FormCrearpersona/> : ""}
      </div>
    )
  }
}


export default studentComponent;
