import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image, Breadcrumb, Row, Col, Button} from 'react-bootstrap'
import { ShareFill,CheckCircle, ChatSquareText } from 'react-bootstrap-icons'
import Footer from '../../Assets/footer/footer'
import Latest from '../../Utils/latest_post/latest'
import {Advertisement, Icon} from 'semantic-ui-react'
import Tags from '../../Utils/tags/tags'
import Card from '../../Utils/card/one_card'
import Navbar from '../../Utils/navbar/navbar'

const artificial = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                    <div className="container blogPost" style={{marginTop:30}}>
                        <h1 style={{paddingLeft:10}}>Category: Artificial Intelligence</h1>
                        <Breadcrumb style={{paddingTop:15}}>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Artifical Intelligence
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                <Row className='container' style={{marginTop:30}}>
                    <Col md={9}>
                        <Row>
                            <Col md={6}>
                                <Card/>
                            </Col>
                            <Col md={6}>
                                <Card/>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col md={6}>
                                <Card/>
                            </Col>
                            <Col md={6}>
                                <Card/>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col md={6}>
                                <Card/>
                            </Col>
                            <Col md={6}>
                                <Card/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} >
                        <h4 style={{paddingLeft:25}}>Latest Posts</h4>
                        <Latest/>
                        <br />
                        <hr style={{marginLeft:30,width:330}}/> 
                        <Latest/>
                        <br />
                        <hr style={{marginLeft:30,width:330}}/>
                        <Latest/>
                        <br />
                        <hr style={{marginLeft:30,width:330}}/>
                        <Latest/>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Advertisement className='container'>
                            <div className="container" style={{width:340,height:500,backgroundColor:'rgb(177, 177, 177)'}}>
                                <h2 className="container text-center" style={{paddingTop:250}}>Advert</h2>
                            </div>
                            
                        </Advertisement>
                        <br />
                        <br />
                        <h4 className='container'>Popular Tags</h4>
                        <Tags/>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    )
}

export default artificial
