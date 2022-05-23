import React from 'react'
import HomeStrip from './homeStrip'
import MainHome from './mainHome'
import MapHome from './mapHome'
import About from './about'

import "../../comps/css/home.css"
function Home(props) {
    return (
        <React.Fragment>
            <HomeStrip />
            <MainHome />
            <About />
            <MapHome />
        </React.Fragment>


    )
}

export default Home