"use client";

import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function PricingPage() {
    const navItems = [
        { name: "About", id: "/#about" },
        { name: "Services", id: "/#services" },
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
                <PricingCardNine
                    title="Choose Your Growth Path"
                    description="Tailored coaching packages for every business stage"
                    animationType="slide-up"
                    textboxLayout="default"
                    plans={[
                        { id: "starter", title: "Starter", price: "$999", period: "/mo", features: ["Bi-weekly calls", "Email support", "Strategy audit"], button: { text: "Get Started", href: "/contact" } },
                        { id: "growth", title: "Growth", price: "$2499", period: "/mo", features: ["Weekly calls", "Priority support", "Full strategy plan", "Team training"], button: { text: "Choose Growth", href: "/contact" } },
                        { id: "pro", title: "Enterprise", price: "$4999", period: "/mo", features: ["Unlimited calls", "Dedicated coach", "Operations scaling", "Executive mentoring"], button: { text: "Choose Enterprise", href: "/contact" } },
                    ]}
                />
                <FooterLogoEmphasis
                    logoText="Coach"
                    columns={[
                        { items: [{ label: "About", href: "/#about" }, { label: "Services", href: "/#services" }] },
                        { items: [{ label: "Pricing", href: "/pricing" }, { label: "Contact", href: "/contact" }] },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}