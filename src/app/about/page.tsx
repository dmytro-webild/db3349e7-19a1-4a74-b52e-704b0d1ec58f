"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import TeamCardSix from "@/components/sections/team/TeamCardSix";

export default function AboutPage() {
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
                <div id="team" data-section="team">
                    <TeamCardSix 
                        title="Our Company Background"
                        description="Founded with a vision to empower entrepreneurs, we have spent over a decade refining the strategies that build world-class businesses."
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                        gridVariant="three-columns-all-equal-width"
                        members={[
                            { id: "1", name: "John Anderson", role: "Founder & CEO", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=4" },
                            { id: "2", name: "Lisa Thompson", role: "Chief Strategy Officer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp?_wi=4" },
                        ]}
                    />
                </div>
            </main>
            <div id="footer" data-section="footer">
                <FooterMedia
                    logoText="Coach"
                    imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp?_wi=5"
                    columns={[{ title: "Links", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }] }]}
                />
            </div>
        </ThemeProvider>
    );
}