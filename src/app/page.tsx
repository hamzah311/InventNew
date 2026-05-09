import styles from "./page.module.css";
import MarqueeLogos from "@/components/home/marquees/MarqueeLogos";
import ScrollingText from "@/components/home/scrollingtext/ScrollingText";
import Predefine from "@/components/home/predefine/predefine";
import Slider from "@/components/home/slider/Lifttypeslider";
import HSection from "@/components/home/life/Herosection";
import Testimonial from "@/components/home/testimonial/Testimonialssection";
import FaqContact from "@/components/home/faqcontact/FaqContact";
import Designed from "@/components/home/designed/DesignedSpacesHero";
import Carousel from "@/components/home/carousel/Carousel";
import HeroBanner from "@/components/home/hero/HeroBanner";
import Navbar from "@/components/home/navbar/Navbar";
import Footer from "@/components/home/footer/Footer";
import { LandingType, HERO_TEXTS, SCROLLING_TEXT, PREDEFINE, CAROUSEL, LIFT_DATA, LIFE_HERO_SECTION, DESIGNED_SPACES_HERO, TESTIMONIAL } from "@/utils/constants";
import StatsSection from "@/components/home/statssection/Statssection";
import AboutSection from "@/components/home/about/AboutSection";
import SeriesSection from "@/components/home/series/SeriesSection";
import FeaturesSection from "@/components/home/features/FeatureSection";
import CtaBanner from "@/components/home/ctabanner/CtaBanner";
import SolutionsSection from "@/components/home/solutions/SolutionsSection";
import ProjectsSection from "@/components/home/projects/ProjectsSection";
import ContactBanner from "@/components/home/contactbanner/ContactBanner";

export default function Home() {
  const current_theme: LandingType = "HOME";

  return (
    <div className={styles.page}>
      <Navbar />
      <HeroBanner data={HERO_TEXTS[current_theme]} />
      <StatsSection />
      <AboutSection />
      <SeriesSection />
      <FeaturesSection />
      <CtaBanner />
      <SolutionsSection />
      <ProjectsSection />
      <MarqueeLogos />
      {/* <ScrollingText data={SCROLLING_TEXT[current_theme]} />
      <Predefine data={PREDEFINE[current_theme]} />
      <Carousel data={CAROUSEL[current_theme]} />
      <Slider data={LIFT_DATA[current_theme]} />
      <HSection data={LIFE_HERO_SECTION[current_theme]} />
      <Designed data={DESIGNED_SPACES_HERO[current_theme]} />
      <Testimonial data={TESTIMONIAL[current_theme]} /> */}
      <FaqContact />
      <ContactBanner />
      <Footer />
    </div>
  );
}
