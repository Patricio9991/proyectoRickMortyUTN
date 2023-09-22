import "./contact.css"
import {Fragment} from "react"

import Nav from "../Nav/nav"

export default function Contact(){

    return(
        <Fragment>
            <Nav/>
            <div className="container-info">
            <main>
                <div className="text-center">
                    <h2>Contact</h2>
                    <h2>Leave us your information so we can contact you</h2>
                </div>

                <form className="row g-3">
                <div className="col-md-6">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="col-md-6">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="col-md-12">
                    <label for="message" className="form-label">Message</label>
                <textarea className ="w-100" id="message" name="message"></textarea>
                </div>
                <div className="col-12 pb-2">
                    <button type="submit" className="btn">Send</button>
                </div>
                </form>
            </main>
            </div>


        </Fragment>







    )




}