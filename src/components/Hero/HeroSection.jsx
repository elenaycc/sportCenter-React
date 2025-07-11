// HeroSection component

import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import HeroBadge from "./HeroBadge";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="text-white hero-section d-flex align-items-center"
      style={{
        backgroundImage: "url('/images/hero-man.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <div className="container text-start">
        <HeroBadge />
        <HeroTitle />
        <p className="hero-paragraph fw-semibold p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut iste...
        </p>
        <HeroButtons />
      </div>
    </section>
  );
};

export default HeroSection;

