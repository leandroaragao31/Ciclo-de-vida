/* import React, { Component } from "react";
//exemplo 1
class App extends Component {
  state = {
    count: 0
  };
  //obs:primeiro o vanilla renderiza, depois o render() mostra na tela, depois o didMount monta, depois o willUpdate mostra atualização e por ultimo o UmMonut desmonta
  componentDidMount() {
    //monta a tarefa a ser executada
    document.title = this.state.count;
  }

  componentDidUpdate() {
    // mostra a execução da tarefa montada
    document.title = this.state.count;
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          contar 1
        </button>
      </div>
    );
  }
}

export default App; */

/* import React, { Component } from 'react';
//exemplo 2
class Main extends Component {
    state={
        count:0,
        nome:'Julio'
    }

    componentDidMount() {
        document.title = this.state.nome
    }

    componentDidUpdate(){
        document.title = this.state.nome
    }

    handleClick = () => {
        this.setState({
            count:this.state.count +1
        })
    }

    Click = () =>{
        this.setState({
            nome:'Lucas' // nome: this.state.nome === "Lucas" ? 'Pedro' : 'Lucas'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => {this.handleClick()}}>contar 1</button>
                <button onClick={() => {this.Click()}}>mudar nome</button>
            </div>
        );
    }
}

export default Main; */

import React, { Component } from 'react';
//exemplo 3
class Main extends Component {
    state={
        count:0,
        nome:'Julio'
    }

    componentDidMount() {
        document.title = this.state.count !== 0 ? document.title = this.state.nome : document.title  = this.state.count
    }

    componentDidUpdate(){
        document.title = this.state.count !== 0 ? document.title = this.state.nome : document.title  = this.state.count
    }

    handleClick = () => {
        this.setState({
            count:this.state.count +1
        })
    }
    handleRemove = () => {
        this.setState({
            count:this.state.count -1
        })
    }

    Click = () =>{
        this.setState({
           nome:'Lucas' // nome: this.state.nome === "Lucas" ? 'Pedro' : 'Lucas'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => {this.handleClick()}}>contar 1</button>
                <button onClick={() => {this.handleRemove()}}>contar -1</button>
                <button onClick={() => {this.Click()}}>mudar nome</button>
            </div>
        );
    }
}

export default Main

//Exercicios

//Crie um Component de Class
//Crie um Ciclo de vida e uma função de clique para atualizar o titulo da sua pagina baseado no seu state
//Crie uma condicional para fazer a alteração voltar para o estado inicial
