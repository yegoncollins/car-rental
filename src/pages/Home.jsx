import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServiceList from '../components/UI/ServiceList'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonials from '../components/UI/Testimonials'

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

      <AboutSection/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section_subtitle">See our</h6>
              <h2 className="section_title">Popular Services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
            <h6 className="section_subtitle">Come with</h6>
            <h2 className="section_title">Hot Offers</h2>
            </Col>
            {
              carData.slice(0,6).map(item=>(
                <CarItem item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>
      
      <BecomeDriverSection/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
            <h6 className="section_subtitle">Our Clients says</h6>
            <h2 className="section_title">Testimonials</h2>
            </Col>
            
            <Testimonials/>

          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home