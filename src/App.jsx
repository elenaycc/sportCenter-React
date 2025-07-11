
// Main App Component
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ClassesSection from "./components/Classes/ClassesSection";
import BMISection from "./components/BMI/BMISection";
import TrainersSection from "./components/Trainers/TrainersSection";
import PurchaseSection from "./components/Purchase/PurchaseSection";
import ReviewsSection from "./components/Reviews/ReviewsSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";

const App = () => { 
  return(
  <>
    <Navbar />
    <HeroSection />
    <ClassesSection />
    <BMISection />
    <TrainersSection />
    <PurchaseSection />
    <ReviewsSection />
    <ContactSection />
    <Footer />
  </>
); 
  }; 
export default App;

