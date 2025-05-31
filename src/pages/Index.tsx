import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import RSVPForm from "@/components/RSVPForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventDetails />
      <PhotoGallery />
      <RSVPForm />
    </div>
  );
};

export default Index;
