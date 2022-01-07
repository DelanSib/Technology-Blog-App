import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../../Utils/card/normal_card'

const technology = () => {
    return (
        <div className='technology'>
            <Carousel>
                <Carousel.Item>
                    <Card/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default technology
