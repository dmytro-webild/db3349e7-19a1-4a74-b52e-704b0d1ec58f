"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import TeamCardFive from "@/components/sections/team/TeamCardFive";

export default function AboutPage() {
    const navItems = [
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Services", id: "/services" },
    ];

    return (
        <ThemeProvider>
            <NavbarLayoutFloatingInline navItems={navItems} brandName="Coach" />
            <main className="pt-24 pb-12">
                <TeamCardFive 
                    title="Our Company Background"
                    description="Founded with a vision to empower entrepreneurs, we have spent over a decade refining the strategies that build world-class businesses."
                    animationType="slide-up"
                    textboxLayout="default"
                    team={[
                        { id: "1", name: "John Anderson", role: "Founder & CEO" },
                        { id: "2", name: "Lisa Thompson", role: "Chief Strategy Officer" },
                    ]}
                />
            </main>
            <FooterLogoEmphasis
                logoText="Coach"
                columns={[{ title: "Links", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }] }]}
            />
        </ThemeProvider>
    );
}