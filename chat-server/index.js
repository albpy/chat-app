/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';*/
const express = require('express')

const config=require('./config/app')

//require('dotenv').config() //call npm i --save dotenv inside our index 

const router = require('./router')

const app = express()

const bodyParser=require('body-parser')

const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use(express.static(__dirname +'/public'))

//const port = process.env.APP_PORT //process.env inbuild API of process module to get user environment
const port=config.appPort

app.listen(port, () => { 
  console.log('Server listening on port ${port} ');
})
/*const root :
 * = ReactDOM.createRoot(document.getElementById('root'));
  render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);// If you want to start measuring performance in your app, poass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
