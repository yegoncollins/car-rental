import React from 'react'
import{Col} from 'reactstrap'
import '../../styles/service-list.css'
import serviceData from '../../assets/data/serviceData'

const ServiceList = () => {
  return (
    <>
    {
        serviceData.map(item=>(
            <ServiceItem item={item} key={item.id}/>
        ))
    }
    </>
  )
}

const ServiceItem = ({item})=>(
    <Col lg='4' md='6' sm='6' className='mb-3'>
        <div className="service_item mb-3">
            <span className='mb-3 inline-block'>
            <i className={item.icon}/>
            </span>
            <h6>{item.title}</h6>
            <p className="section_description">{item.desc}</p>
        </div>
    
    </Col>
)

export default ServiceList