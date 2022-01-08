import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home/home'
import Blogpost from '../../Utils/blog_post/blogpost'
import Artificial from '../../Pages/Artificial Intelligence/artificial'
import IoT from '../../Pages/IoT/iot'
import Robotics from '../../Pages/Robotics/robotics'
import Gadgets from '../../Pages/Gadgets/gadgets'

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:slug" exact component={Blogpost} />
                <Route path="/category/atificial-intelligence" exact component={Artificial} />
                <Route path="/category/IoT" exact component={IoT} />
                <Route path="/category/robotics" exact component={Robotics} />
                <Route path="/category/gadgets" exact component={Gadgets} />
            </Switch>
        </BrowserRouter>
    )
}

export default router
