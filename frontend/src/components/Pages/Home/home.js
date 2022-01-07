import React, {useState, useEffect} from 'react'
import Header from '../../Assets/header/Header_section'
import SectionOne from '../../Assets/Section 1/section_one'
import Subscribe from '../../Assets/subscribe/subscribe'
import Trending from '../../Assets/trending/trending'
import Latest from '../../Utils/latest_post/latest'
import Technology from '../../Assets/technology/technology'
import NewSection from '../../Assets/new/new_section'
import Footer from '../../Assets/footer/footer'
import Tags from '../../Utils/tags/tags'
import axios from 'axios'
import { BLOG_URL } from '../../Utils/urls'
import Skeleton from 'react-skeleton-loading'

const Home = () => {
    const [fetching, setFetching] = useState(true);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        getBlogContent();
    }, [])

    const getBlogContent = () => {
        axios.get(BLOG_URL).then(
            (res) => {
                setBlogList(res.data);
                setFetching(false);
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    return (
        <div id="Home">
            <Header/>
            <SectionOne/>
            <Subscribe/>
            <div className=' container row'>
                {
                    fetching ? (
                        <div className="col-md-9">
                            <br />
                            <br />
                            <Skeleton height={200} />
                            <br/>
                            <br />
                            <Skeleton height={200} />
                        </div>
                    ) : (
                        <div className="col-md-9">
                            <h1 className="container trending">Trending articles</h1>
                            {console.log(blogList)}
                            {
                                blogList.map((item, id) => <Trending id={id} data={item} />)
                            }
                            
                        </div>
                    )
                }
                
                <div className="col-md-3 ">
                    <h1 className="container trending">Latest posts</h1>
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
                    <hr style={{marginLeft:30,width:330}}/>
                    <Latest/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h4 className='container'>Popular Tags</h4>
                    <Tags/>
                </div>
            </div>
            <Technology/>
            <NewSection/>
            <Footer/>
        </div>
    )
}

export default Home
