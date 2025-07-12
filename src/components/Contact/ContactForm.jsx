import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <h5 className="fw-bold mb-3">Make An Appointment</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-3 bg-light-subtle"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-3 bg-light-subtle"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          className="form-control mb-3 bg-light-subtle"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-primary mt-2">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
