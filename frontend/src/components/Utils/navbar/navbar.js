import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {List } from 'react-bootstrap-icons'
import {Facebook, Twitter} from 'react-bootstrap-icons'
import Search from '../../Utils/search/search'


const navbar = () => {
    function openMenu(){
        document.getElementById('side-menu').style.marginRight = '0px';
        document.body.style.marginRight = '325px';
    }
    
    function closeMenu(){
        document.getElementById('side-menu').style.marginRight = '-325px';
        document.body.style.marginRight = '0';
    }

    return (
        <div>
            <section id='header' onMouseLeave={()=>closeMenu()}>
                <nav className='navbar py-4' style={{backgroundColor:'rgb(6, 12, 24, 0.85)',zIndex:1}} onMouseLeave={()=>closeMenu()}>
                    <div className="container" >
                        <Search/>
                        <a href="/" className="nav-brand mx-auto" style={{textDecoration:'none'}}>TechLAB</a>
                        <List onMouseOver={()=>openMenu()} id= 'list'/>
                    </div>
                    <div id="side-menu">
                        <ul>
                            <li>
                                <a className='text-light' href="/category/atificial-intelligence" style={{textDecoration:'none'}}>Artificial Intelligence</a>
                            </li>
                            <hr />
                            <li>
                                <a className='text-light' href="/category/gadgets" style={{textDecoration:'none'}}>Gadgets</a>
                            </li>
                            <hr />
                            <li>
                                <a className='text-light' href="/category/robotics" style={{textDecoration:'none'}}>Robotics</a>
                            </li>
                            <hr />
                            <li>
                                <a className='text-light' href="/category/IoT" style={{textDecoration:'none'}}>IoT</a>
                            </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr className='text-light'/>
                        <div className="container">
                        <span className="container">
                            <a href="www.facebook.com">
                                <Facebook className='text-light' style={{fontSize:'2.5rem', marginLeft:40}}/>
                            </a>
                            <a href="www.twitter.com">
                                <Twitter className='text-light' style={{marginLeft:120, fontSize:'2.5rem'}}/>
                            </a>
                        </span>
                    </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default navbar
