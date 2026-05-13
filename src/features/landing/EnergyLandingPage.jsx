import './landing.css';
import { BenefitStrip } from './components/BenefitStrip';
import { EnergyFooter } from './components/EnergyFooter';
import { EnergyNavbar } from './components/EnergyNavbar';
import { FaqSection } from './components/FaqSection';
import { FeaturedProductSection } from './components/FeaturedProductSection';
import { HeroSection } from './components/HeroSection';
import { ProductRange } from './components/ProductRange';
import { PromoGrid } from './components/PromoGrid';
import { Testimonials } from './components/Testimonials';
export function EnergyLandingPage() {
    return (<div className="min-h-screen overflow-x-hidden bg-black">
      <EnergyNavbar />
      <main>
        <HeroSection />
        <ProductRange />
        <BenefitStrip />
        <FeaturedProductSection />
        <PromoGrid />
        <Testimonials />
        <FaqSection />
      </main>
      <EnergyFooter />
    </div>);
}
