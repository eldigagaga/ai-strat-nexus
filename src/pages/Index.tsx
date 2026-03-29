import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsCarousel from "@/components/NewsCarousel";
import AboutSection from "@/components/AboutSection";
import LecturesSection from "@/components/LecturesSection";
import VideosSection from "@/components/VideosSection";
import AvatarSection from "@/components/AvatarSection";
import ChatbotSection from "@/components/ChatbotSection";
import BooksSection from "@/components/BooksSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <NewsCarousel />
    <AboutSection />
    <LecturesSection />
    <VideosSection />
    <AvatarSection />
    <ChatbotSection />
    <BooksSection />
    <FooterSection />
  </div>
);

export default Index;
