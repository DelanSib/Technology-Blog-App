import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Image} from 'react-bootstrap'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'

const related = () => {
    return (
        <div>
            <Card  style={{height:300,borderRadius:0, backgroundColor:'rgb(231, 231, 231'}} border='rgb(231, 231, 231)'>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Image src={Image1} fluid style={{height:230}}/>
                        </a>
                        <Card.Body>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Title>Card title</Card.Title>
                        </a>
                        </Card.Body>
                        <Card.Footer>
                            <span>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link style={{textDecoration:'none'}}>Robotics</Card.Link>
                            </a>
                            <small>,</small>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link style={{paddingLeft:10}}>Robotics</Card.Link>
                            </a>
                            </span>
                        </Card.Footer>
            </Card>
        </div>
    )
}

export default related
