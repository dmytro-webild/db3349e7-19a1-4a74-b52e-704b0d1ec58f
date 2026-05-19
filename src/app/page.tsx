"use client";

import ReactLenis from "lenis/react";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

export default function BusinessCoachTemplatePage() {
    const navItems = [
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "/pricing" },
        { name: "Contact", id: "/contact" },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Coach"
                    button={{ text: "Book a Call", href: "/contact" }}
                />
                <HeroSplitDualMedia
                    background={{ variant: "radial-gradient" }}
                    tag="Business Coach"
                    tagIcon={Sparkles}
                    title="Transform your business with proven strategies"
                    description="I help entrepreneurs and executives unlock their full potential and build thriving businesses through personalized coaching."
                    mediaItems={[
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp", imageAlt: "Coaching session" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp", imageAlt: "Business growth" },
                    ]}
                    rating={5}
                    ratingText="Rated by loving Clients"
                    buttons={[
                        { text: "Book a Call", href: "/contact" },
                        { text: "Learn More", href: "#about" },
                    ]}
                    mediaAnimation="slide-up"
                />
                <FeatureCardTwentyFive
                    tag="Services"
                    tagIcon={Sparkles}
                    title="How I Can Help You"
                    description="Comprehensive coaching services designed to accelerate your growth"
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        { title: "Business Strategy", description: "Crafting clear, actionable strategies that align with your goals for sustainable growth.", icon: Target },
                        { title: "Leadership Development", description: "Build the leadership skills needed to inspire teams and drive organizational success.", icon: Users },
                        { title: "Growth Acceleration", description: "Identify opportunities and implement systems to scale your business efficiently.", icon: TrendingUp },
                        { title: "Mindset Coaching", description: "Overcome limiting beliefs and develop the mindset of a successful entrepreneur.", icon: Lightbulb },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}