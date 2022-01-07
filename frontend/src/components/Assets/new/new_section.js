import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../../Utils/card/one_card'


const new_section = () => {
    return (
        <div className='container new_section'>
            <p className="display-4">Whats New</p>
            <div className="row">
                    <div className="col-md-4">
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <Card/>
                    </div>
            </div>
        </div>
    )
}

export default new_section
