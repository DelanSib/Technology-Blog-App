import React from 'react'
import {Card, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'

const recent = () => {
    return (
        <div className='recent container'>
                <div className="row latest1">
                    <div className="col-md-4">
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Image src={Image1} roundedCircle fluid style={{height:100}}/>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <Card border='rgb(22, 22, 22)' style={{borderRadius:0,height:100,width:250,backgroundColor:'rgb(22, 22, 22)'}}>
                            <span className='container'>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-light' style={{textDecoration:'none'}}>Robotics,</Card.Link>
                            </a>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-light' style={{textDecoration:'none'}}>Robotics</Card.Link>
                            </a>
                            </span>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Title className='container text-light'>Title</Card.Title>
                        </a>
                        </Card>
                    </div>
                </div>
        </div>
    )
}

export default recent
