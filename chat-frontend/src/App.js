import React from 'react';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Chat from './components/Chat/Chat'
import PageNotFound from './components/Auth/PageNotFound'
import ProtectedRoute from './components/Router/ProtectedRoute'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.scss';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProtectedRoute />}>
            <Route exact path='/' element={<Chat />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
