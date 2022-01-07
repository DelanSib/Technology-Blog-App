import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'

const normal_card = () => {
    return (
        <div className='container'>
                <CardGroup className='cardgroup'>
                    <Card className='cards' style={{height:600,borderRadius:0}} border='light'>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Img variant="top" src={Image1} border='dark'/>
                        </a>
                        <Card.Body style={{padding:25}}>
                            <small>by</small>
                            <Card.Link className='text-muted' style={{padding:5, textDecoration:'none'}}>Kuda Sibanda</Card.Link>
                            <Card.Link className='text-muted' style={{textDecoration:'none'}}>June 29, 2021</Card.Link>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Title style={{marginTop:10}}>Card title</Card.Title>
                            </a>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body >
                        <Card.Footer style={{width:320, paddingLeft:40}}>
                            <span>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}> 
                                <Card.Link className='text-muted' style={{textDecoration:'none'}}>Robotics</Card.Link>
                            </a>
                            </span>
                        </Card.Footer>
                    </Card>
                    <Card className='cards' style={{height:600,borderRadius:0}} border='light'>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Img variant="top" src={Image1} />
                        </a>
                        <Card.Body style={{padding:25}}>
                            <small>by</small>
                            <Card.Link className='text-muted' style={{padding:5, textDecoration:'none'}}>Kuda Sibanda</Card.Link>
                            <Card.Link className='text-muted' style={{textDecoration:'none'}}>June 29, 2021</Card.Link>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Title style={{marginTop:10}}>Card title</Card.Title>
                            </a>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{width:320, paddingLeft:40}}>
                            <span>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-muted' style={{textDecoration:'none'}}>Robotics</Card.Link>
                            </a>
                            </span>
                        </Card.Footer>
                    </Card>
                    <Card className='cards' style={{height:600,borderRadius:0}} border='light'>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Img variant="top" src={Image1} />
                        </a>
                        <Card.Body style={{padding:25}}>
                            <small>by</small>
                            <Card.Link className='text-muted' style={{padding:5, textDecoration:'none'}}>Kuda Sibanda</Card.Link>
                            <Card.Link className='text-muted' style={{textDecoration:'none'}}>June 29, 2021</Card.Link>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Title style={{marginTop:10}}>Card title</Card.Title>
                            </a>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{width:320, paddingLeft:40}}>
                            <span>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-muted' style={{textDecoration:'none'}}>Robotics</Card.Link>
                            </a>
                            </span>
                        </Card.Footer>
                    </Card>
                </CardGroup>
        </div>
    )
}

export default normal_card
