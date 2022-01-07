import {React, useState} from 'react'
import { Button } from 'react-bootstrap'
import { ShareFill, Twitter, Linkedin, Envelope, Facebook} from 'react-bootstrap-icons'

const Share = () => {

    const [isShare,setIsShare] = useState(false)

    return (
        <div style={{display:'flex'}} >
            <Button href="#" className='button' onClick={()=> setIsShare(!isShare)} >
                <ShareFill/>
                    <strong style={{paddingLeft:15}}>Share</strong> 
            </Button>
            <div style={{paddingLeft:10}} >
                {isShare && <Item/>}
            </div>
        </div>
    )
};

const Item = () => {
    return (
        <div>
            <span>
                <Twitter style={{
                    margin:10, 
                    color:'royalblue', 
                    fontSize:'125%'
                    }}/>
                <Facebook style={{
                    margin:10, 
                    color:'royalblue', 
                    fontSize:'125%'
                    }}/>
                <Linkedin style={{
                    margin:10, 
                    color:'royalblue', 
                    fontSize:'125%'
                    }}/>
                <Envelope style={{
                    margin:10, 
                    fontSize:'125%'
                    }}/>
            </span>
        </div>
    )
}

export default Share
