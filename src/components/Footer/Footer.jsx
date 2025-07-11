// Footer component

import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="py-0 text-white" style={{ backgroundColor: "#355592" }}>
      <div className="container">
        <FooterInfo />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;

