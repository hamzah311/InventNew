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

export default function Home() {
  const current_theme: LandingType = "HOME";

  return (
    <div className={styles.page}>
      <Navbar />
      <HeroBanner data={HERO_TEXTS[current_theme]} />
      <MarqueeLogos />
      <ScrollingText data={SCROLLING_TEXT[current_theme]} />
      <Predefine data={PREDEFINE[current_theme]} />
      <Carousel data={CAROUSEL[current_theme]} />
      <Slider data={LIFT_DATA[current_theme]} />
      <HSection data={LIFE_HERO_SECTION[current_theme]} />
      <Designed data={DESIGNED_SPACES_HERO[current_theme]} />
      <Testimonial data={TESTIMONIAL[current_theme]} />
      <FaqContact />
      <Footer />
    </div>
  );
}
