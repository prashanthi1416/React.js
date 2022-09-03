import React from 'react';
import Myclass from './components/myclass';
import Lifecycle from './components/Lifecycle';
import Restapi from './components/Restapi';
import RB from './components/Rb.js';
import Local from './components/local';
import View from './components/Localparameter/view';
import App from './components/wether.js';
import TodoList from './components/Todo';
import Cal from './components/calculator.js';
//React  Hooks
import RHuseState from './components/Hooks/useState.js';
import RHuseEffect from './components/Hooks/useEffect.js';
import Pagination from './components/Hooks/hookspagination.js';
// import Hooksedit from './components/HooksApi/hooksEdit.js';
// import Hooksview from './components/HooksApi/hooksView';
import Hooksuser from './components/HooksAPI/hooksUser.js';
import HooksView from './components/HooksAPI/hooksView.js';
import HooksEdit from './components/HooksAPI/hooksEdit.js';
import HooksSignup from './components/HooksAPI/hooksSignup';
import HooksRedux from './components/HooksRedux/hooksRedux.js';
// import Hookssignup from './components/HooksApi/hooksSignup.js';
// import UsersAction from './usersAction';
// function_components
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Rb.css';
import Search from './components/Search.js';
import Signup from './components/signup.js';
import Edit from './components/Edit.js';
import Delete from './components/Delete.js'
// redux
// import Routings from './routings'
// import store from './Redux-Store/index'
// ReactDom.render(<provider store={store}>
//     {/* <Routings/>  */}
//   </provider>,document.getElementById('root'))
// import { provider } from 'react-redux';
// import store from './Redux-Store/index';
import Nav from './components/Navbar.js';
import Contact from './components/contact.js';
import Material from './components/material.js';
import Product from './components/product.js';
import Service from './components/service.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Login from './components/login.js';
import About from './components/about.js';
import User from './components/user.js';
import Page from './components/pagenotfound.js';
import Img from './components/images.js';
import  rrc from './components/rrc';

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
function Routings(){
    return(<>
 <BrowserRouter>
        <Header/>
    
        {/* <Nav/> */}
       
     <Switch>
       
       {/* <Route  exact path="/" component={Product}/> */}
       <Route   path="/product" component={Product}/>
       <Route path="/service" component={Service}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/login" component={Login}/>
       <Route path="/about" component={About}/>
       <Route path="/user" component= {User}/>
       <Route path="/images" component={Img}/>
       <Route path="/Rb"component={RB}/>
       <Route path="/Search/:imgname" component={Search}/>
       <Route path="/material" component={Material}/>
       <Route path="/wether"component={App}/>
       <Route path="/Todo" component={TodoList}/>
       <Route path="/calculator" component={Cal}/>
       <Route path="/rrc"component={rrc}/>
       {/* hooks */}
       <Route path="/rhuseState" component={RHuseState}/>
       <Route path="/rhuseEffect" component={RHuseEffect}/>
       <Route path="/hookspagination"component={Pagination}/>
       <Route path="/hooksUser"component={Hooksuser}/>
       <Route path="/hooksUser/view/:idno"component={HooksView}/>
       <Route path="/hooksUser/edit/:idno"component={HooksEdit}/>
       <Route path="/hooksSignup"component={HooksSignup}/>
       <Route path="/hooksRedux"component={HooksRedux}/>
       <Route path="/local" component={Local}/>
       

       {/* <view/> with Router parameters */}
       <Route path="/signup" component={Signup}/>
       <Route path="/Edit" component={Edit}/>
       <Route path="/delete" component={Delete}/>
       <Route  path="/local/view/:idno" component={View}/>
       <Route  path="/local/Edit/:idno" component={Edit}/>
       <Route  path="/myclass" component={Myclass}/>
       <Route path="/Lifecycle"component={Lifecycle}/>
       <Route Path="/Restapi"component={Restapi}/>
       

       
       {/* <Route path="/images/nest1" component={Nest}/>
       <Route path="/images/nest2" component={Nest2}/>
       <Route path="/images/nest3" component={Nest3}/> */}
       {/* <Route path="/home" component={FirstExample}/> */}
       
       {/* Redirection */}
       <Redirect to="/product"/>
        {/* page not found */}
       <Route  component={Page}/>
       </Switch>
        <Footer/>
        </BrowserRouter>
      
</>)
}
export default Routings;