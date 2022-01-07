import {React, useState} from 'react'
import {Search} from 'react-bootstrap-icons'

const Search_me = () => {

    const [isSearch, setIsSearch] = useState(false)

    return (
        <div>
            <a href="">
                <Search onClick={() => setIsSearch(!isSearch)} style={{
                    color:'rgb(231, 231, 231)',
                    fontSize:'150%'
                }} />
            </a>
            {isSearch && <Bar/>}
        </div>
    )
};

const Bar = () => {
    return (
        <div>
            <input type="search" />
        </div>
    )
}

export default Search_me
