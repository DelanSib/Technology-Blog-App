import React from 'react'
import {Button, Card, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import {Link} from "react-router-dom"

const trending = (props) => {
    
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
                        <Card.Link className='text-muted' style={{padding:5,textDecoration:'none',textTransform:'capitalize'}}>{props.data.author.username}</Card.Link>
                        <Card.Link className='text-muted' style={{textDecoration:'none'}}>{moment(new Date(props.data.created_at)).format('YYYY MMM Do')}</Card.Link>
                        <Card.Body>
                            {removeTag(props.data.content).toString().substring(0,100)}
                            {removeTag(props.data.content).toString().length > 100 && "..."}
                            <br/>
                            <br/>
                            <Link to ={`/${props.data.slug}`}>
                                <Button>Continue Reading</Button>
                            </Link>
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
