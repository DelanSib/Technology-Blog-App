import React from 'react'
import {} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recent from '../../Utils/recent/recent'
import Tags from '../../Utils/tags/tags'
import {Facebook, Twitter} from 'react-bootstrap-icons'

const footer = () => {
    return (
        <div className='footer'>
            <div className="row ">
                <div className="col-md-4">
                    <a href="/" style={{textDecoration:'none'}}>
                        <h1 id="techlab">TechLAB</h1>
                    </a>
                    <br />
                    <br />
                    <p className="container text-light text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit arcu sit amet efficitur congue. Aliquam a auctor turpis. In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit arcu sit amet efficitur congue. Aliquam a auctor turpis. In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit arcu sit amet efficitur congue. Aliquam a auctor turpis. In
                    </p>
                    <br />
                    <hr className='container' style={{color:'white',width:'80%'}}/>
                    <br />
                    <div className="container">
                        <span className="container">
                            <a href="/www.facebook.com" target="_blank">
                                <Facebook className='text-light' style={{fontSize:'3rem', marginLeft:80}}/>
                            </a>
                            <a href="www.twitter.com" target="_blank">
                                <Twitter className='text-light' style={{marginLeft:80, fontSize:'3rem'}}/>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="col-md-4 container">
                    <h1 id="recent_post">Recent Posts</h1>
                    <Recent/>
                    <hr style={{color:'white',width:400, marginLeft:30}}/>
                    <Recent/>
                    <hr style={{color:'white',width:400, marginLeft:30}}/>
                    <Recent/>
                </div>
                <div className="col-md-4 container">
                    <h1 id="tags">Tags</h1>
                    <Tags/>
                </div>
            </div>
        </div>
    )
}

export default footer
