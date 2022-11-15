import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
    const [formSubmitError, setFormSubmitError] = useState("");

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleSubmit() {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        console.log(name, email, message);
        console.log(isValidEmail(email));
        let errors = "";
        if (!name || name.length == 0) {
            errors += "Valid Name is required. ";
        }
        if (!email || email.length == 0 || !isValidEmail(email)) {
            errors += "Valid email is required. ";
        }
        if (!message || message.length == 0) {
            errors += "Valid message is required. ";
        }
        if (errors.length > 0) {
            setFormSubmitError(errors);
            return;
        }
        // All fields are valid, send the form
        if (name && email && message) {
            // Send the email
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            }

            emailjs.send('service_7tskl6i', 'template_lwyh0zs', templateParams, 'HdckuVj0mQifsbz_A');

            // Notify client of success
            setFormSubmitSuccess(true);
        }
    }

    if (!formSubmitSuccess) {
        return (
            <div className="App">
                <h1>Contact</h1>
                <p>
                    Quickly send me a message using the form below. I will get back to you as soon as possible.
                </p>
                {formSubmitError && <p className="error">{formSubmitError}</p>}
                <form name="contact" >
                    <input type="hidden" name="form-name" value="contact" />
                    <h3>
                        <label>Your Name: </label><br></br>
                        <input required type="text" name="name" id="name"/>
                    </h3>
                    <h3>
                        <label>Your Email: </label><br></br>
                        <input required type="email" name="email" id="email"/>
                    </h3>
                    <h3>
                        <label>Message:</label><br></br>
                        <textarea required name="message" id="message"></textarea>
                    </h3>
                    <h2>
                        <button type="button" onClick={handleSubmit}>Send</button>
                    </h2>
                </form>
                <footer>
                    <a href="https://www.mattvandenberg.com/">Looking for a Developer?</a>
                    <br></br>
                    <a href="https://www.jilldraws.com/">Looking for a Cartoonist?</a>
                </footer>
            </div>
        ); 
    }
    return (
        <div className="App">
            <h1>Thank you, your message has been sent! We will be in touch shortly!</h1>
            <footer>
                <a href="https://www.mattvandenberg.com/">Looking for a Developer?</a>
                <br></br>
                <a href="https://www.jilldraws.com/">Looking for a Cartoonist?</a>
            </footer>
        </div>
    );
}
