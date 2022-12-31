import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./dashboard.css";
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {
    const form = useRef();
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        navigate("/")
        emailjs.sendForm("service_ekz5wbk", "template_bnjqbhl", form.current, "gFn8b3K9_z1u-EJUr")
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className='contact-me-form'>
            <div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h1>Say Hello!</h1>
                    <label className='Name label'>Name</label>
                    <input type="text" name="user_name" className='name input' />
                    <label className='Name label'>Email</label>
                    <input type="email" name="user_email" className='email input' />
                    <label className='Name label'>Message</label>
                    <textarea name="message" className='textarea' />
                    <input type="submit" value="Submit" className='submit-btn' />
                </form>
            </div>
        </div>
    )
}

export default ContactMe;

