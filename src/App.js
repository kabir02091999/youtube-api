import React,{useEffect} from 'react';
import './App.css';
import Header from './component/Header/Header';
import SideBar from './component/Sidebar/Sidebar';
import RecommendedVideos from './component/RecommendedVideos/RecommendedVideos'; 

import Search from './search/search'
import ReproduceVideo from './component/reproductor/ReprodceVideo'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom"; 
import axios from 'axios';



function App() {


  return (
    <div className="App">
     
      {/* <Router>
        <Header />
        <Switch>
          <Route path='/' element={
            <div className="app__mainpage">
              
              <RecommendedVideos/> 
            </div>} />
          <Route 
          
            path="/video/:id"
            element={

              <ReproduceVideo/>

            }
          
          />
          <Route
            path="/search/:search"
            element={

              <Search/>

            }
          />  
             
        </Switch>
      </Router>  */}
      <h1>antes de empesar</h1>
      <p>seguir las instruccines</p>
      <p>para poder ejecutar el proyecto se nesecita una clave de la api de youtube data v3</p>
      <p>luego de octener la clave e ir a los documentos y poner en la url key=(pone la clave) los doccumento son </p>
      <p>1)seach.jsx</p>
      <p>2)RecommendedVideos.js</p>
      <p>en el documento App.js qutar los comentario y provar el proyecto</p>

    </div>
  );
}

export default App;
