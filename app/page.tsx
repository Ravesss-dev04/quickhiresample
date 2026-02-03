import { Header, Footer } from '@/app/components/LayoutModules';
import { 
  HeroHomeSection, 
  ValuePropSection, 
  DualPlatformSection, 
  FeaturedJobsCarousel, 
  TrustStatsSection, 
  SimplifiedSignupSection 
} from '@/app/components/HomeSections';
import { LiveMapSection } from '@/app/components/FeatureModules';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <HeroHomeSection />
        <ValuePropSection />
        <div className="relative z-0">
           <LiveMapSection />
        </div>
        <DualPlatformSection />
        <FeaturedJobsCarousel />
        <TrustStatsSection />
        <SimplifiedSignupSection />
      </main>
      <Footer />
    </div>
  );
}
