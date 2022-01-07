import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const card_compo = () => {
    return (
        <Card  style={{height:500, padding:50, backgroundColor:'rgb(245, 245, 245)'}}>
                <Card.Body className='container cardbody'>
                    <small>by</small>
                    <Card.Link className='text-muted' style={{padding:5,textDecoration:'none'}}>Kuda Sibanda</Card.Link>
                    <Card.Link className='text-muted' style={{textDecoration:'none'}}>June 29, 2021</Card.Link>
                    <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                        <Card.Title style={{marginTop:20}}>Card title</Card.Title>
                    </a>
                    <Card.Text style={{marginTop:20}}>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <hr style={{width:500, marginLeft:20}}/>
                    <span style={{margin:30}}>
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Link className='text-muted' style={{textDecoration:'none'}}>Artificial Intelligence,</Card.Link>
                        </a>
                        <a  href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                        </a>
                    </span>
                    
            </Card>
    )
}

export default card_compo
