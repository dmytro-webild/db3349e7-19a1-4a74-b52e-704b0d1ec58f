"use client";

import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function ContactPage() {
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
                <ContactCenter
                    title="Let's Connect"
                    description="Reach out to discuss your goals or learn more about my coaching programs. I'm here to help."
                    tag="Contact"
                    background={{ variant: "plain" }}
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