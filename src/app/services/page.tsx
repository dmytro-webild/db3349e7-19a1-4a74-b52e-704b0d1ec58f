"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";

export default function ServicesPage() {
    const navItems = [
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Services", id: "/services" },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="text-stagger"
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
                <NavbarStyleCentered navItems={navItems} brandName="Coach" />
            </div>
            <main className="pt-24 pb-12">
                <div id="features" data-section="features">
                    <FeatureCardTwentyFour
                        title="Our Accounting Services"
                        description="Reliable financial management for growing businesses."
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        features={[
                            { id: "1", title: "Bookkeeping", author: "Coach", description: "Accurate daily record keeping.", tags: [], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp" },
                            { id: "2", title: "Tax Planning", author: "Coach", description: "Strategic tax minimization strategies.", tags: [], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp" },
                            { id: "3", title: "Financial Reporting", author: "Coach", description: "Deep insights into your company performance.", tags: [], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp" }
                        ]}
                    />
                </div>
            </main>
            <div id="footer" data-section="footer">
                <FooterMedia
                    logoText="Coach"
                    imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp"
                    columns={[{ title: "Links", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }] }]}
                />
            </div>
        </ThemeProvider>
    );
}