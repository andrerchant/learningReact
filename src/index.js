import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/badge';

const fotoAndy = "https://instagram.fmex7-1.fna.fbcdn.net/vp/1119985ce3409471f3631c73d30cdb0d/5E64C107/t51.2885-19/s150x150/49683380_796737684024181_8687158980700536832_n.jpg?_nc_ht=instagram.fmex7-1.fna.fbcdn.net";

ReactDOM.render(
    <Badge 
        firstName="Andrew" 
        lastName="merchant" 
        jobTitle="Software developer"
        twitter="andrerchant"
        avatar={fotoAndy}
    />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
