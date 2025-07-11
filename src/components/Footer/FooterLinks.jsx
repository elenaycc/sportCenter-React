// FooterLinks component

const FooterLinks = () => {
  const infoLinks = [
    { href: "#about", label: "About Us" },
    { href: "#classes", label: "Classes" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const helpLinks = [
    { href: "#services", label: "Services" },
    { href: "#support", label: "Supports" },
    { href: "#terms", label: "Terms & Condition" },
    { href: "#privacy", label: "Privacy Policy" },
  ];

  return (
    <div className="row justify-content-center text-start mt-2 flex-nowrap gap-3">
      <div className="col-md-3 col-sm-6 mb-2">
        <h6 className="fw-bold mb-2">Information</h6>
        <ul className="list-unstyled">
          {infoLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-white text-decoration-none">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-md-3 col-sm-6 mb-2 ms-md-4">
        <h6 className="fw-bold mb-2">Helpful Links</h6>
        <ul className="list-unstyled">
          {helpLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-white text-decoration-none">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;

