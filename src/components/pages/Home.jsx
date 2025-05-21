import React from "react";
import DefaultPage from "../DefaultPage";

function Home(){
    return(
        <DefaultPage>
            <h1>Fruits Page</h1>
            <p>Welcome to my website where we display fruits of your choice</p>

            <section>
                <h2>Fruits in Season</h2>
                <ul>
                    <li>Apples - Fall</li>
                    <li>Mangoes - Summer</li>
                    <li>Strawberries - Spring</li>
                    <li>Oranges - Winter</li>
                </ul>
            </section>

            <section>
                <h2>Why Eat Fruits?</h2>
                <p>Fruits are packed with vitamins antioxidants, and fiber that support your immune system, heart health and digestion</p>
                <ul>
                    <li>Rich in Vitamin</li>
                    <li>High in Fiber</li>
                    <li>Low in Calories</li>
                    <li>Contains antioxidants</li>
                </ul>
            </section>

            <section>
                <h2>Fruit Fun Fact</h2>
                <p>Did you know Bananas are berries but strawberries aren't!</p>
            </section>
        </DefaultPage>
    )
}

export default Home;