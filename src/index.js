import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data.json';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
