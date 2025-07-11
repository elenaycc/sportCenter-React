import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container px-4 py-0">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <NavLinks />
          <a href="#join" className="btn join-btn fw-bold text-white py-1 px-2">
            JOIN US
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
