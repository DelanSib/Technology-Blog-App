import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Image} from 'react-bootstrap'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'

const one_card = () => {
    return (
        <div>
            <Card className='cards' style={{height:600,borderRadius:0}} border='rgb(231, 231, 231)'>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Image src={Image1} fluid style={{height:230, width:'100%'}}/>
                        </a>
                        <Card.Body style={{padding:40}}>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Title>Card title</Card.Title>
                        </a>
                        <small>by</small>
                        <Card.Link className='text-muted' style={{padding:5,textDecoration:'none'}}>Kuda Sibanda</Card.Link>
                        <Card.Link className='text-muted' style={{textDecoration:'none'}}>June 29, 2021</Card.Link>
                        <Card.Text style={{textAlign:'left', marginTop:15}}>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body >
                        <Card.Footer style={{width:320, paddingLeft:40}}>
                            <span>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-muted' style={{textDecoration:'none'}}>Robotics</Card.Link></a>
                            </span>
                        </Card.Footer>
            </Card>
        </div>
    )
}

export default one_card
