"use client";

import ReactLenis from "lenis/react";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

export default function BusinessCoachTemplatePage() {
    const navItems = [
        { name: "About", id: "/about" },
        { name: "Services", id: "/services" },
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
            background="circleGradient"
            cardStyle="glass-elevated"
            primaryButtonStyle="gradient"
            secondaryButtonStyle="glass"
            headingFontWeight="normal"
        >
            <div id="nav" data-section="nav">
                <NavbarStyleCentered
                    navItems={navItems}
                    brandName="Coach"
                    button={{ text: "Book a Call", href: "/contact" }}
                />
            </div>
            <ReactLenis root>
                <div id="hero" data-section="hero">
                    <HeroBillboardCarousel
                        background={{ variant: "radial-gradient" }}
                        tag="Business Coach"
                        tagIcon={Sparkles}
                        title="Transform your business with proven strategies"
                        description="I help entrepreneurs and executives unlock their full potential and build thriving businesses through personalized coaching."
                        mediaItems={[
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=1", imageAlt: "Coaching session" },
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp?_wi=1", imageAlt: "Business growth" },
                        ]}
                        buttons={[{ text: "Book a Call", href: "/contact" }]}
                    />
                </div>
                <div id="features" data-section="features">
                    <FeatureCardTwentyFour
                        tag="Services"
                        tagIcon={Sparkles}
                        title="How I Can Help You"
                        description="Comprehensive coaching services designed to accelerate your growth"
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        features={[
                            { id: "1", title: "Business Strategy", author: "Coach", description: "Crafting clear, actionable strategies that align with your goals for sustainable growth.", tags: ["Strategy"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=2" },
                            { id: "2", title: "Leadership Development", author: "Coach", description: "Build the leadership skills needed to inspire teams and drive organizational success.", tags: ["Leadership"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp?_wi=2" },
                            { id: "3", title: "Growth Acceleration", author: "Coach", description: "Identify opportunities and implement systems to scale your business efficiently.", tags: ["Growth"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=3" },
                            { id: "4", title: "Mindset Coaching", author: "Coach", description: "Overcome limiting beliefs and develop the mindset of a successful entrepreneur.", tags: ["Mindset"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp?_wi=3" },
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}