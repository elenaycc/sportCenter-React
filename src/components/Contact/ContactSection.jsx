// ContactSection component
import ContactForm from "./ContactInfo";
import ContactInfo from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-center">CONTACT US</h2>
        <div
          className="rounded-2 mb-4"
          style={{
            width: "80px",
            borderBottom: "6px solid #f49c0f",
            margin: "0 auto",
          }}
        ></div>
        <p className="text-muted text-center mb-5 fw-semibold">
          Lorem Ipsum is not simply random text. It has roots in a piece of classical at <br />
          Hampden–Sydney College.
        </p>

        <div className="row align-items-start g-4">
          <div className="col-md-6">            
            <ContactForm />
            <ContactInfo />
          </div>
          <div className="col-md-6">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

