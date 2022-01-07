import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const tags = () => {
    return (
        <div className='container tags'>
            <Button href="/category/robotics/blog-post" className='btn-secondary hover'>
                <strong>Internet of Things</strong> 
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Artifical Intelligence</strong> 
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Technology</strong> 
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Super Intelligence</strong>
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Machine Learning</strong>
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Computers</strong>
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Robotics</strong>
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Computers</strong>
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Smartphones</strong>
            </Button>
            <Button href="/category/robotics/blog-post" className='btn-secondary'>
                <strong>Holograms</strong>
            </Button>
        </div>
    )
}

export default tags
