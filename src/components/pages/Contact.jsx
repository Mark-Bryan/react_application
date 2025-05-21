import React from "react";
import DefaultPage from "../DefaultPage";


function Contact(){
    return(
        <DefaultPage>
            <h1>My Contact Page</h1>
            <p>Have any questions about our fruits or want to make a request? Reach out to us! </p>
            <section>
                <h2>Contact Information</h2>
                <p>Email: banyehakika81@gmail.com</p>
                <p>Phone: +44 7881 382507</p>
                <p>Address: 1542 Clifton Suspension Bridge, Bristol</p>
            </section>
            <section>
                <h2>Business Hours</h2>
                <p>Mon - Fri : 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
            </section>

        </DefaultPage>
    )
}

export default Contact;