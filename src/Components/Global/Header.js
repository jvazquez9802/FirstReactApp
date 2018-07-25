//Depemdemcies
import React, { Component } from 'react';
/*PropTYpes es una validacion que ayuda a definir que propiedades debemos de recibir, de que tipo y 
ver si son necesarios o requeridas o simplemente se pueden mandar como nulas*/
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired
  };
  render() {
    //console.log(this.props);
    const{ title = "Ambar32", items } = this.props;
    //const title = this.props.title;
    //const items = this.props.items;
    // >>>La funcion " Map funciona como un forEach pero retorna un array nuevo<<< el >>>KEY<<< guarda posicion"
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="App-title">{title}</h2>

          <ul className = "Menu">

            {items && items.map(
              (items, key)=> <li key = { key }>
                <Link to = {items.url}>{items.title}</Link>
              </li>
              )
            }
          
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
