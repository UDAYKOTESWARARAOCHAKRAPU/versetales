    // ContactUs.js
    import React, { useState } from 'react';
    import '../Css/ContactUs.css';
    import Navbar from '../Components/Navbar';
    import Footer from '../Components/Footer';

    const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic, like sending the data to a server
        console.log('Form Data Submitted:', formData);
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Navbar/>
            <div className="contact-us-container">
                <h2>Contact Us</h2>
                {isSubmitted && <p className="success-message">Thank you for your message! We will get back to you soon.</p>}
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    );
    };

    export default ContactUs;
