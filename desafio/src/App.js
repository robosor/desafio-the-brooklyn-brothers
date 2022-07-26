import './App.css';
import jsonFile from './productsCategory.json';
import React, { Component } from 'react';

export const data = jsonFile.data.nodes;

export class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    this.setState({ data: data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())) });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className='page' >
        <input
          className="form-input"
          onChange={this.handleEvent}
          placeholder="Pesquisar produto"
        />,
        <div className="card-container">
          {this.state.data.map((item, key) => {
            return (
              <div className="card" key={key}>
                <div className="imagem">
                  <img
                    src={item.images[0].asset.url}
                    alt={item.images[0].alt}
                    width="50"
                    height="50" />
                </div>
                <div className="conteudo">
                  <h5> {item.name} </h5>
                  <p>{item.shortDescription}</p>
                  <p><b>{item.category.name}</b></p>
                </div>
              </div>
            )
          })}
        </div>

      </div >
    )
  }
};

function App() {
  return (
    <div className="App">
      <Lista />
    </div>
  );
}

export default App;
