"use client";

import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function ContactPage() {
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
                <div id="contact" data-section="contact">
                    <ContactSplit
                        title="Let's Connect"
                        description="Reach out to discuss your goals or learn more about my coaching programs. I'm here to help."
                        tag="Contact"
                        background={{ variant: "plain" }}
                        useInvertedBackground={false}
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=10"
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterMedia
                        logoText="Coach"
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=11"
                        columns={[
                            { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }] },
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}