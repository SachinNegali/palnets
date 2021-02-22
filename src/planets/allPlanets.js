
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import Favorites from './favorites';
import Like from './../../src/assets/like.svg'
import Heart from './../../src/assets/heart.svg'
export const userContext = React.createContext(); 

const AllPlanets = ({planets,addToFavorite}) => {



    return (
        <Row>
        <Col md={12}>
              <Card className='border-0'>
              <CardBody>
                {planets.length > 0 && planets.map((planet) => 
                  <div key={planet?.id}>
                    <Row className="mb-4">
                      <Col md={10} xs={7}>
                        <h5 className="text-secondary">{planet?.name}</h5>
                      </Col>
                      <Col md={2} xs={5}>
                        {planet.isFavourite === true ?
                            <img onClick = {() => {addToFavorite(planet?.id)}} 
                            src={Heart} alt="Add tO Favourites" width={20}/> 
                            : 
                            <img onClick = {() => {addToFavorite(planet?.id)}} 
                            src={Like} alt="Add tO Favourites" width={20}/>}
                      </Col>
                    </Row>
                  </div>
                )}
              </CardBody>
            </Card>
        </Col>
        </Row>
    )
}

export default AllPlanets
