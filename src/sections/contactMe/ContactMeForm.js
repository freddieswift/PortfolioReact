import React from 'react'
import formClasses from './ContactMeForm.module.css'
import '../../utils/button/Button.css'

const ContactMeForm = () => {
    return (
        <form className={formClasses.contactMeForm} action="https://formsubmit.co/freddie_swift@outlook.com" method="POST">
            <div>
                <label for="name">Name</label>
                <input name="name" id="name" type="text" required />
            </div>
            <div>
                <label for="email">Email</label>
                <input name="email" id="email" type="email" required />
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message" type="text" required></textarea>
            </div>
            <button className="btn formBtn">Send</button>
        </form >
    )
}

export default ContactMeForm