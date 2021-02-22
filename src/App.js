import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../src/components/menu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import AllPlanets from './planets/allPlanets'
import Favorites from './planets/favorites'
import React, { useState,useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames'
import './App.css'


function App() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
const [planets, setPlanets] = useState([]);

  const getPlanets = async() => {
 fetch('https://assignment-machstatz.herokuapp.com/planet')
  .then(response => response.json())
  .then(data => {console.log(data)
    setPlanets(data)}
  );
}



const addToFavorite = id => {
	const allPlantes = [...planets]	
	allPlantes.map(item => {
	if(item.id === id){
		item.isFavourite = true
	}
})
    setPlanets(allPlantes)
    console.log("alllPlanetsssss" ,allPlantes);
    

}


 
useEffect(() => {
    getPlanets()
}, [])
  return ( 
    <Container>
    <Row>
      <Col md={3}></Col>
        <Col md={6}>
      <Nav pills className="tabColor">
        <Col md={6} xs={6}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          > <h5 className="text-center font-weight-bold ">
            Planets
            </h5>
          </NavLink>
        </NavItem>
        </Col>
        <Col md={6} xs={6}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <h5 className="text-center font-weight-bold">
            Favourites
            </h5>

          </NavLink>
        </NavItem>
        </Col>
      </Nav>
       <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
          <Col md={12}>
             <AllPlanets planets={planets} addToFavorite={addToFavorite} />
          </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mb-4">
           <Favorites planets={planets} />
          </Row>
        </TabPane>
      </TabContent>
      </Col>
        <Col md={2}></Col>
    </Row>
    <Row>
      <Col md={12}>
 
      </Col>
    </Row>
    
  </Container>

  );
}

export default App;
