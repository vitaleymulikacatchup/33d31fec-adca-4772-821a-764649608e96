"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Tag, TrendingUp, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Build Your Online Presence"
          description="Create stunning websites with our modern web design platform"
          tag="Modern Design"
          tagIcon={Sparkles}
          buttons={[
            { text: "Get Started", href: "pricing" },
            { text: "Learn More", href: "features" }
          ]}
          imageSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Plan"
          description="Select the perfect package for your needs"
          tag="Pricing"
          tagIcon={Tag}
          plans={[
            {
              id: "1",
              badge: "Starter",
              price: "$29/mo",
              subtitle: "For small projects",
              features: [
                "1 Project",
                "Basic Components",
                "Community Support",
                "Monthly Updates"
              ],
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "2",
              badge: "Pro",
              price: "$79/mo",
              subtitle: "For growing businesses",
              features: [
                "5 Projects",
                "Advanced Components",
                "Priority Support",
                "Weekly Updates"
              ],
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "3",
              badge: "Enterprise",
              price: "$199/mo",
              subtitle: "For large teams",
              features: [
                "Unlimited Projects",
                "Custom Components",
                "24/7 Support",
                "Daily Updates"
              ],
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Contact Sales", href: "#" }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact"
          description="See what we've achieved together"
          tag="Growth"
          tagIcon={TrendingUp}
          metrics={[
            { id: "1", value: "10K+", description: "Websites Created" },
            { id: "2", value: "98%", description: "Client Satisfaction" },
            { id: "3", value: "24/7", description: "Support Available" },
            { id: "4", value: "50+", description: "Countries Served" }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By Industry Leaders"
          description="Join thousands of companies building with our platform"
          tag="Partners"
          tagIcon={Star}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Ready to start your project? Contact us today"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Your Message",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Webild"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Privacy", href: "privacy" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}