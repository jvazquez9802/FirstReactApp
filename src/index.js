//Punto de entrada de webPack
//DEPENDENCIES
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Routes
import AppRoutes from './routes';
//Assets
import './index.css';


import registerServiceWorker from './registerServiceWorker';

//ID root hace referencia al index en public (punto de partida)
render(
    <Router>
        <AppRoutes/>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
