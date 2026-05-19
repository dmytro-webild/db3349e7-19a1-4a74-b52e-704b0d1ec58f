"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";

export default function ServicesPage() {
    const navItems = [
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Services", id: "/services" },
    ];

    return (
        <ThemeProvider>
            <NavbarLayoutFloatingInline navItems={navItems} brandName="Coach" />
            <main className="pt-24 pb-12">
                <FeatureCardTen 
                    title="Our Accounting Services"
                    description="Reliable financial management for growing businesses."
                    textboxLayout="default"
                    animationType="slide-up"
                    features={[
                        { title: "Bookkeeping", description: "Accurate daily record keeping.", items: [], reverse: false },
                        { title: "Tax Planning", description: "Strategic tax minimization strategies.", items: [], reverse: true },
                        { title: "Financial Reporting", description: "Deep insights into your company performance.", items: [], reverse: false }
                    ]}
                />
            </main>
            <FooterLogoEmphasis
                logoText="Coach"
                columns={[{ title: "Links", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }] }]}
            />
        </ThemeProvider>
    );
}