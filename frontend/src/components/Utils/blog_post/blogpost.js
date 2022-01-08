import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image, Breadcrumb, Row, Col, Button} from 'react-bootstrap'
import Image1 from '../../../pictures/149943_hi-tech-gadgets-hd-wallpapers-1080p-19-wallpapers-hd-3d_1600x1000_h.jpg'
import {CheckCircle, ChatSquareText } from 'react-bootstrap-icons'
import Related from '../related_post/related'
import Footer from '../../Assets/footer/footer'
import Latest from '../../Utils/latest_post/latest'
import {Advertisement, Icon} from 'semantic-ui-react'
import Tags from '../../Utils/tags/tags'
import Navbar from '../navbar/navbar'
import Share from '../../Utils/share/Share'
import axios from 'axios'
import { BLOG_URL } from '../urls'
import { Skeleton } from 'react-skeleton-loading'

const Blogpost = (props) => {
    const [fetching, setFetching] = useState(true);
    const [activeBlog, setActiveBlog] = useState(null);

    useEffect(()=>{
        axios.get(BLOG_URL+props.match.params.slug).then(
            res => {
                setActiveBlog(res.data)
            },
            err => {
                console.log(err)
            }
        );
    },[])

    return (
        <div>
            <Navbar/>
            <div className='container'>
            <div className="container blogPost" style={{marginTop:30}}>
                        <h1 style={{paddingLeft:10}}>Category: Robotics</h1>
                        <Breadcrumb style={{paddingTop:15}}>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/category/robotics">
                                Artifical Intelligence
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Blog post</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                <Row className='container' style={{marginTop:30}}>
                    <Col md={9} sm={6}>
                        <Image src={Image1} fluid style={{height:500,width:'100%'}}/>
                        <h1>Title</h1>
                        <small>by</small>
                        <a className='text-muted' href="" style={{paddingLeft:5}}>Kuda Sibanda</a>
                        <a className='text-muted' href="" style={{paddingLeft:10}}>Date</a>
                        <hr />
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                        </p>
                        <br />
                        <h4>Tags In</h4>
                        <Button href="/category/robotics" className='btn-secondary'>
                            <strong>Internet of Things</strong> 
                        </Button>
                        <Button href="/category/robotics" className='btn-secondary'>
                            <strong>Artifical Intelligence</strong> 
                        </Button>
                        <hr />
                        <div style={{display:'flex', justifyContent:'space-between'}} >
                                <div>
                                    <Share/>
                                </div>
                                <div>
                                    <span>
                                        <a href="" className="text-muted">Robotics</a>
                                        <small>,</small>
                                        <a style={{paddingLeft:10}} href="" className="text-muted">IoT</a>
                                        <ChatSquareText style={{marginLeft:30, fontSize:'150%', paddingRight:5}}/>
                                        {0}
                                    </span>
                                </div>
                        </div>
                        <hr />
                        <br />
                        <h4 >Related Posts</h4>
                        <br />
                        <Row>
                            <Col md={4}>
                                <Related/>
                            </Col>
                            <Col md={4}>
                                <Related/>
                            </Col>
                            <Col md={4}>
                                <Related/>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <h4>Leave a Reply</h4>
                        <h8 className='text-danger' style={{Text:'italics'}}>Required fields are marked <CheckCircle/></h8>
                        <br />
                        <br />
                        <h5>Message <CheckCircle/></h5>
                        <textarea name="Reply" id="" cols="125" rows="10"></textarea>
                        <br />
                        <br />
                        <h5>Name <CheckCircle/></h5>
                        <textarea name="" id="" cols="125" rows="2"></textarea>
                        <br />
                        <br />
                        <h5>Email <CheckCircle/></h5>
                        <textarea name="" id="" cols="125" rows="2"></textarea>
                        <br />
                        <br />
                        <h5>Website</h5>
                        <textarea name="" id="" cols="125" rows="2"></textarea>
                        <br />
                        <br />
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                <strong>Save my name, email and website in this browser for the next time I comment</strong> 
                            </label>
                        </div>
                        <br />
                        <Button href="#" className='button float-left'> 
                            <strong>SEND A COMMENT</strong> 
                        </Button>
                    </Col>
                    <Col md={3} sm={6}>
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

export default Blogpost
