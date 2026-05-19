"use client";

import ReactLenis from "lenis/react";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

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
                <HeroSplitDualMedia
                    background={{ variant: "radial-gradient" }}
                    tag="Business Coach"
                    tagIcon={Sparkles}
                    title="Transforma tu negocio con estrategias probadas"
                    description="Ayudo a emprendedores y ejecutivos a desbloquear todo su potencial y construir negocios prósperos mediante coaching personalizado."
                    mediaItems={[
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp", imageAlt: "Sesión de coaching" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp", imageAlt: "Crecimiento de negocio" },
                    ]}
                    rating={5}
                    ratingText="Valorado por clientes satisfechos"
                    buttons={[
                        { text: "Reservar una llamada", href: "#contact" },
                        { text: "Más información", href: "#about" },
                    ]}
                    mediaAnimation="slide-up"
                />
                <FeatureCardTwentyFive
                    tag="Servicios"
                    tagIcon={Sparkles}
                    title="Cómo puedo ayudarte"
                    description="Servicios de coaching integrales diseñados para acelerar tu crecimiento."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        {
                            title: "Estrategia Empresarial",                            description: "Elaboración de estrategias claras y accionables alineadas con tus objetivos para un crecimiento sostenible.",                            icon: Target,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", imageAlt: "Equipo colaborando" },
                                { imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", imageAlt: "Reunión de estrategia" },
                            ],
                        },
                        {
                            title: "Desarrollo de Liderazgo",                            description: "Desarrolla las habilidades de liderazgo necesarias para inspirar equipos e impulsar el éxito organizacional.",                            icon: Users,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", imageAlt: "Reunión de equipo" },
                                { imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop", imageAlt: "Líder de negocios" },
                            ],
                        },
                        {
                            title: "Aceleración de Crecimiento",                            description: "Identifica oportunidades e implementa sistemas para escalar tu negocio de manera eficiente.",                            icon: TrendingUp,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", imageAlt: "Dashboard de analítica" },
                                { imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", imageAlt: "Métricas de crecimiento" },
                            ],
                        },
                        {
                            title: "Coaching de Mentalidad",                            description: "Supera las creencias limitantes y desarrolla la mentalidad de un emprendedor exitoso.",                            icon: Lightbulb,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop", imageAlt: "Mindfulness y enfoque" },
                                { imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop", imageAlt: "Sesión de coaching individual" },
                            ],
                        },
                    ]}
                />
                <TestimonialCardSixteen
                    tag="Testimonios"
                    tagIcon={Sparkles}
                    title="Lo que dicen mis clientes"
                    description="Historias de emprendedores que han transformado sus negocios."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    testimonials={[
                        {
                            id: "1",                            name: "Sarah Mitchell",                            role: "Founder & CEO",                            company: "TechStart Inc",                            rating: 5,
                            imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Sarah Mitchell"},
                        {
                            id: "2",                            name: "Michael Chen",                            role: "Managing Director",                            company: "Growth Partners",                            rating: 5,
                            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Michael Chen"},
                        {
                            id: "3",                            name: "Emily Rodriguez",                            role: "Business Owner",                            company: "Creative Studios",                            rating: 5,
                            imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Emily Rodriguez"},
                    ]}
                    kpiItems={[
                        { value: "200+", label: "Clientes guiados" },
                        { value: "95%", label: "Tasa de éxito" },
                        { value: "12+", label: "Años de experiencia" },
                    ]}
                />
                <TeamCardTen
                    title="Conoce a los coaches experimentados que guiarán personalmente tu transformación empresarial"
                    tag="Sobre mí"
                    membersAnimation="slide-up"
                    memberVariant="card"
                    useInvertedBackground={false}
                    members={[
                        {
                            id: "1",                            name: "John Anderson",                            imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",                            imageAlt: "John Anderson - Business Coach"},
                        {
                            id: "2",                            name: "Lisa Thompson",                            imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Lisa Thompson - Executive Coach"},
                    ]}
                />
                <FaqSplitMedia
                    tag="FAQ"
                    tagIcon={Sparkles}
                    title="Preguntas Frecuentes"
                    description="Respuestas a las dudas más comunes sobre mis servicios de coaching."
                    textboxLayout="default"
                    faqsAnimation="slide-up"
                    mediaAnimation="slide-up"
                    useInvertedBackground={false}
                    imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                    imageAlt="Consulta de coaching"
                    mediaPosition="right"
                    faqs={[
                        {
                            id: "1",                            title: "¿Con qué tipos de negocios trabajas?",                            content: "Trabajo con emprendedores, startups y negocios establecidos en diversos sectores. Mi coaching es personalizado según tus desafíos y objetivos específicos."},
                        {
                            id: "2",                            title: "¿Cuánto dura un proceso de coaching típico?",                            content: "La mayoría de los clientes ven resultados significativos entre 3 y 6 meses. La duración depende de tus metas."},
                        {
                            id: "3",                            title: "¿Qué puedo esperar de nuestras sesiones?",                            content: "Cada sesión es una conversación enfocada en la acción. Saldrás de cada reunión con pasos concretos para implementar."},
                        {
                            id: "4",                            title: "¿Ofreces sesiones virtuales?",                            content: "Sí, ofrezco sesiones tanto presenciales como virtuales vía Zoom para mayor comodidad y alcance."},
                    ]}
                />
                <ContactText
                    text="¿Listo para transformar tu negocio? Comencemos tu camino hacia el éxito hoy mismo."
                    background={{ variant: "plain" }}
                    useInvertedBackground={false}
                    buttons={[
                        { text: "Reservar consulta gratuita", href: "#contact" },
                        { text: "Más información", href: "#" },
                    ]}
                />
                <FooterLogoEmphasis
                    logoText="Innexus"
                    columns={[
                        {
                            items: [
                                { label: "Sobre mí", href: "#about" },
                                { label: "Servicios", href: "#services" },
                                { label: "Testimonios", href: "#testimonials" },
                            ],
                        },
                        {
                            items: [
                                { label: "FAQ", href: "#faq" },
                                { label: "Contacto", href: "#contact" },
                                { label: "Reserva", href: "#contact" },
                            ],
                        },
                        {
                            items: [
                                { label: "LinkedIn", href: "#" },
                                { label: "Twitter", href: "#" },
                                { label: "Instagram", href: "#" },
                            ],
                        },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}