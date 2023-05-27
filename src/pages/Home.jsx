import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'

const Home = () => {
  return (
    <Helmet title='Home'>
      <section className="p-0 hero_slider-section">
        <HeroSlider/>
        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg='4' md='4'>
               <div className="find_cars-left">
                <h2>Find your best car here</h2>
               </div>
              </Col>
              <Col lg='8' md='8' sm='12' >
              <FindCarForm/>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Helmet>
  )
}

export default Home