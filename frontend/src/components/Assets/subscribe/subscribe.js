import React from 'react'
import {Form, Button,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const subscribe = () => {
    return (
        <div className='text-center subscribe_section'>
            <h1 className=" display-4 subscribe text-light">Subscribe to get</h1>
            <h1 className=" display-4 text-light">my latest updates</h1>
            
            <Form inline>
                <Form.Row className='d-flex align-items-end form'>
                    <div className='col-md-6 textfield container'>
                        <Form.Control
                            className="mb-2 mr-sm-2"
                            id="inlineFormInputEmail2"
                            placeholder="Please, enter your email"
                        />
                    </div>
                    
                    <div>
                        <Button type="submit" className="mb-2 ml-20">
                            Submit
                        </Button>
                    </div>
                    
                </Form.Row>
            </Form>
        </div>
        
    )
}

export default subscribe
