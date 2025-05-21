import React from 'react'
import DefaultPage from '../DefaultPage'

function About(){
    return(
        <DefaultPage>
            <h1>Hello There!</h1>
            <p>Welcome to my fruit Info Hub</p>

            <section>
                <h2>What You Can Do Here</h2>
                <ul>
                    <li>Explore a variety of Fruits</li>
                    <li>Learn about each fruit's benefit</li>
                    <li>Discover seasonal fruits</li>
                </ul>
            </section>
            <section>
                <h2>Our Purpose</h2>
                <p>This platform is dedicated to helping yoou learn more about favorite fruits. Whethere you're searching for fruit benefits, seasonal fruits and fun facts, we got you covered</p>
            </section>
        </DefaultPage>
    )
}

export default About;