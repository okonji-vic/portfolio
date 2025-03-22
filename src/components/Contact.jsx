
import React from "react";
import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            formErrors.message = "Message is required";
        }
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setErrors({});
            try {
                const response = await emailjs.send(
                    "service_dvki6kt",
                    "template_je8jgk9",
                    formData,
                    "h0DjCIW9RZ9cZ4CNE"
                );
    
                if (response.status === 200) {
                    setSuccess("Your message has been sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                } else {
                    setErrors({ form: "There was an error sending your message." });
                }
            } catch (error) {
                setErrors({ form: "There was a network error. Please try again." });
            }
        } else {
            setErrors(formErrors);
            setSuccess("");
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
      <section id="contact" className="contact">
            <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up">Have a question or want to work together? Feel free to reach out!</p>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`contact-input ${errors.name ? "error-border" : ""}`}
          value={formData.name}
          onChange={handleChange}
          data-aos="fade-right"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`contact-input ${errors.email ? "error-border" : ""}`}
          value={formData.email}
          onChange={handleChange}
          data-aos="fade-left"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          className={`contact-textarea ${errors.message ? "error-border" : ""}`}
          value={formData.message}
          onChange={handleChange}
          data-aos="zoom-in"
        ></textarea>
        {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit" className="contact-button" data-aos="flip-up" data-aos-delay="600">
          Send Message
        </button>

        {success && <p className="success-message">{success}</p>}
      </form>
            
        </section>
    );
}

export default Contact;



                
                

        
