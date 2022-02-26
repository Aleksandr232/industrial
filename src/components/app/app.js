import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from '../menu/menu';
import Header from '../header/header';
import About from '../about/about';
import Jobs from '../jobs/jobs';
import Schema from '../schema/schema';
import Photo from '../photo/photo';








export default class App extends Component{
  
    render(){
        return(
            <Router>
      <div >
        <div><Menu/></div>
        <Routes>
        <Route exact path="/" element={<Header/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/jobs" element={<Jobs/>}></Route>
        <Route path="/schema" element={<Schema/>}></Route>
        <Route path="/photo" element={<Photo/>}></Route>
        </Routes>
      </div>
    </Router>
  );
        
    }
}