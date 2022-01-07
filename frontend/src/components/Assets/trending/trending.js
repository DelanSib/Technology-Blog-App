import React from 'react'
import {Card, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'

const trending = (props) => {
    {console.log(props.data)}
    const removeTag = (content) => {
        const regex = /(<([^>]+)>)/gi;
        return content.replace(regex, "");
    }
    return (
        <div className='container trend'>
            <Card border='rgb(231, 231, 231)' style={{borderRadius:0}} id={props.id} >
                <div className="row">
                    <div className="col-md-4">
                    <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                        <Image fluid style={{height:200, backgroundImage:`url("${props.data.cover}")`}}/>
                    </a>
                    </div>
                    <div className="col-md-8">
                        <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                            <Card.Title className='display-6 text-muted' style={{paddingLeft:12}}>{props.data.title}</Card.Title>
                        </a>
                        <small style={{paddingLeft:15}}>by</small>
                        <Card.Link className='text-muted' style={{padding:5,textDecoration:'none'}}>Kuda Sibanda</Card.Link>
                        <Card.Link className='text-muted' style={{textDecoration:'none'}}>June 29, 2021</Card.Link>
                        <Card.Body>
                            {removeTag(props.data.content).toString().substring(0,100)}
                            {removeTag(props.data.content).toString().length > 100 && "..."}
                        </Card.Body>
                        <Card.Footer style={{width:490, paddingLeft:15}}>
                            <span>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-muted' style={{textDecoration:'none'}}>Robotics,</Card.Link>
                            </a>
                            <a href="/category/robotics/blog-post" style={{textDecoration:'none'}}>
                                <Card.Link className='text-muted' style={{textDecoration:'none', paddingLeft:10}}>Robotics</Card.Link>
                            </a>
                            </span>
                        </Card.Footer>
                    </div>
                </div>
                    
            </Card>
        </div>
        
    )
}

export default trending
