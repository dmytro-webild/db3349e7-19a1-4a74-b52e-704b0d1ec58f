"use client";

import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function PricingPage() {
    const navItems = [
        { name: "Home", id: "/" },
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
            background="none"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleCentered
                        navItems={navItems}
                        brandName="Coach"
                        button={{ text: "Book a Call", href: "/contact" }}
                    />
                </div>
                <div id="pricing" data-section="pricing">
                    <PricingCardNine
                        title="Choose Your Growth Path"
                        description="Tailored coaching packages for every business stage"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                        plans={[
                            { id: "starter", title: "Starter", price: "$999", period: "/mo", features: ["Bi-weekly calls", "Email support", "Strategy audit"], button: { text: "Get Started", href: "/contact" } },
                            { id: "growth", title: "Growth", price: "$2499", period: "/mo", features: ["Weekly calls", "Priority support", "Full strategy plan", "Team training"], button: { text: "Choose Growth", href: "/contact" } },
                            { id: "pro", title: "Enterprise", price: "$4999", period: "/mo", features: ["Unlimited calls", "Dedicated coach", "Operations scaling", "Executive mentoring"], button: { text: "Choose Enterprise", href: "/contact" } },
                        ]}
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterMedia
                        logoText="Coach"
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=9"
                        columns={[
                            { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }] },
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}