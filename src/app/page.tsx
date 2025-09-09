"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase logoSrc="/images/logo.svg" logoAlt="NovaToken logo" logoClassName="h-10" className="bg-transparent" />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to NovaToken" subtitle="Your gateway to digital finance!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="About NovaToken" descriptions={["NovaToken aims to transform digital finance.", "Join us in a new era of innovation."]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy NovaToken" steps={[{ title: "Step 1", description: "Sign up for an account", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Deposit funds", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Purchase your tokens", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics title="Tokenomics Overview" description="Discover the utility and distribution of NovaToken." kpiItems={[{ value: "1M", description: "Total Supply", icon: Shield }, { value: "500k", description: "Liquidity", icon: Users }, { value: "20%", description: "Founders", icon: Star }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="NovaToken logo" logoText="NovaToken" items={[{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }, { label: "Help", onClick: () => {} }]} className="text-white" gradientClassName="bg-gradient-to-r from-indigo-500 to-blue-500" gradientStyle={{ backgroundColor: "#1a1a1a" }} />
      </div>
    </SiteThemeProvider>
  );
}