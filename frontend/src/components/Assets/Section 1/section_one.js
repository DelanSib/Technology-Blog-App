import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardGroup, Image } from 'react-bootstrap'
import CardTemp from '../../Utils/card/card_compo'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'


const section_one = () => {
    return (
        <CardGroup className="container" id='group' >
            <Card border='dark' style={{height:500}}>
            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                <Image src={Image1} fluid style={{height:500}}/>
            </a>
            </Card>
            <CardTemp/>
        </CardGroup>
    )
}

export default section_one
