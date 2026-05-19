"use client";

import ReactLenis from "lenis/react";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyFive from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardOne";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitText";
import TeamCardTen from "@/components/sections/team/TeamCardOne";
import ContactText from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterBaseCard";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb, Calculator, BookOpen, Building } from "lucide-react";

export default function BusinessCoachTemplatePage() {
    const navItems = [
        { name: "Sobre mí", id: "about" },
        { name: "Servicios", id: "services" },
        { name: "Testimonios", id: "testimonials" },
        { name: "Contacto", id: "contact" },
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
                    brandName="Innexus"
                    logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/logo.png"
                    button={{ text: "Reservar una llamada", href: "#contact" }}
                />
                <div id="hero">
                    <HeroSplitDualMedia
                        background={{ variant: "radial-gradient" }}
                        tag="Soluciones Estratégicas"
                        tagIcon={Sparkles}
                        title="Servicios contables, tributarios y consultoría empresarial"
                        description="En Innexus potenciamos el crecimiento de pymes, startups y grandes empresas con un acompañamiento integral y profesional en sus finanzas y estrategia."
                        rating={5}
                        ratingText="4.9/5 basado en 200+ clientes"
                        mediaItems={[
                            { imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop", imageAlt: "Contabilidad profesional" },
                            { imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", imageAlt: "Consultoría empresarial" },
                        ]}
                        buttons={[
                            { text: "Reservar una llamada", href: "#contact" },
                            { text: "Nuestros servicios", href: "#services" },
                        ]}
                        mediaAnimation="slide-up"
                    />
                </div>
                <div id="services">
                    <FeatureCardTwentyFive
                        tag="Servicios"
                        tagIcon={Sparkles}
                        title="Expertos en tu crecimiento"
                        description="Ofrecemos soluciones personalizadas para asegurar el éxito financiero y operativo de tu organización."
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        features={[
                            { title: "Contabilidad integral", description: "Gestión contable precisa para mantener la salud de tu empresa al día.", icon: Calculator },
                            { title: "Optimización tributaria", description: "Asesoría fiscal experta para optimizar tus cargas impositivas legalmente.", icon: BookOpen },
                            { title: "Consultoría empresarial", description: "Estrategias de crecimiento adaptadas a pymes, startups y corporaciones.", icon: Building },
                            { title: "Planificación financiera", description: "Proyecciones y análisis de datos para decisiones estratégicas sólidas.", icon: TrendingUp },
                        ]}
                    />
                </div>
                <div id="testimonials">
                    <TestimonialCardSixteen
                        tag="Testimonios"
                        title="Lo que dicen nuestros clientes"
                        description="Historias de éxito de empresas que confiaron en nuestra asesoría."
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        gridVariant="three-columns-all-equal-width"
                        testimonials={[
                            { id: "1", name: "Sarah Mitchell", role: "Founder & CEO", company: "TechStart Inc", rating: 5 },
                            { id: "2", name: "Michael Chen", role: "Managing Director", company: "Growth Partners", rating: 5 },
                            { id: "3", name: "Emily Rodriguez", role: "Business Owner", company: "Creative Studios", rating: 5 },
                        ]}
                    />
                </div>
                <div id="contact">
                    <ContactText
                        tag="Contacto"
                        title="¿Listo para llevar tu empresa al siguiente nivel?"
                        description="Déjanos tus datos y un consultor de Innexus se pondrá en contacto contigo para evaluar cómo podemos ayudarte."
                        background={{ variant: "radial-gradient" }}
                        useInvertedBackground={false}
                    />
                </div>
                <FooterLogoEmphasis
                    logoText="Innexus"
                    columns={[
                        { title: "Servicios", items: [{ label: "Contabilidad", href: "#services" }, { label: "Consultoría", href: "#services" }] },
                        { title: "Compañía", items: [{ label: "Sobre nosotros", href: "#" }, { label: "Contacto", href: "#contact" }] },
                        { title: "Redes", items: [{ label: "LinkedIn", href: "#" }, { label: "Twitter", href: "#" }] },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}