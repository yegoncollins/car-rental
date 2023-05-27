import React from 'react'
import { Container, Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/cars',
    display:'Cars'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
  {
    path:'#',
    display:'Privacy Policy'
  }
]

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
          <div className="logo footer_logo">
                <h1><Link to='/home' className='d-flex align-items-center gap-2'>
                <i class="ri-roadster-fill"></i>
                <span>Rental Car <br />Service</span>
                </Link></h1>
              </div>
              <p className="footer_logo-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur soluta corporis eligendi maxime, 
                excepturi doloremque minima libero perferendis ipsam rem.
                 Aliquid iure voluptate dolorum tempora voluptatibus ea ut debitis sequi?
              </p>
          </Col>
          <Col lg='2' md='4' sm='6'>
              <div className='mb-4'>
                <h5 className='footer_link-title'> Quick Links</h5>
                <ListGroup>
                { 
                 quickLinks.map((item,index)=>(
                  <ListGroupItem  key={index} className='p-0 mt-3 quick_link' >
                  <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
               ))
              }
                </ListGroup>
                
              </div>
          </Col>
          <Col  lg='3' md='4' sm='6'>
           <div className="mb-4">
           <h5 className='footer_link-title'> Head Office </h5>
           <p className='office_info'> 123 Street, Westalands, Nairobi.</p>
           <p className='office_info'> Phone: +254-701-234-567</p>
           <p className='office_info'> Email: rentalcars234@gmail.com</p>
           <p className='office_info'> Office Time: 10am - 7pm</p>
           <p className='office_info'> Monday - Saturday</p>
           </div>
          </Col>
          <Col lg='3' md='4'>
            <div className="mb-4">
            <h5 className='footer_link-title'> Newsletter </h5>
            <p className="section_description">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span><i class="ri-send-plane-fill"></i></span>
            </div>
            </div>
          </Col>
          <Col lg='12'>
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i class="ri-copyright-fill"></i>Copyright {year}, All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer