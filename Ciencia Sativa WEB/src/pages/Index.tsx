import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFacc from "@/assets/logo-facc.png";
import logoVerdePatagonia from "@/assets/logo-verde-patagonia.png";
import logoTrazacann from "@/assets/logo-trazacann.png";
import logoCannacheck from "@/assets/logo-cannacheck.png";
import logoCannalizar from "@/assets/logo-cannalizar.png";
import serviceConsultorio from "@/assets/service-consultorio.jpg";
import serviceAnalisis from "@/assets/service-analisis.jpg";
import serviceCultivo from "@/assets/service-cultivo.jpg";
import serviceMycelio from "@/assets/service-mycelio.jpg";

const services = [
  { 
    title: "Consultorio Sativa", 
    description: "Consultas con nuestros profesionales de la salud\nPermisos REPROCANN\nTratamientos",
    href: "/consultorio",
    buttonText: "Ver más",
    image: serviceConsultorio
  },
  { 
    title: "Análisis de Cannabis", 
    description: "Análisis de flores y fitopreparados\nAnálisis Gemmacert PRO",
    href: "/productos",
    buttonText: "Ver más",
    image: serviceAnalisis
  },
  { 
    title: "Servicio de Cultivo", 
    description: "Nuestra ONG está autorizada por el Ministerio de Salud mediante la Ley 27.350 en el marco del REPROCANN a brindar el servicio de cultivo a personas usuarias",
    href: "/contacto",
    buttonText: "Completar formulario",
    image: serviceCultivo
  },
  { 
    title: "Mycelio", 
    description: "Grupo de capacitación continua para personas vinculadas al uso terapéutico del cannabis y otras fito-mico terapias",
    href: "/eventos",
    buttonText: "Ver más",
    image: serviceMycelio
  },
];

const upcomingEvents = [
  { title: "Taller de Cultivo Responsable", date: "25 de enero, 2025", location: "Bariloche" },
  { title: "Conferencia: Cannabis y Salud Mental", date: "8 de febrero, 2025", location: "San Martín de los Andes" },
  { title: "Charla: Introducción al REPROCANN", date: "15 de febrero, 2025", location: "Neuquén" },
  { title: "Workshop: Elaboración de Fitopreparados", date: "22 de febrero, 2025", location: "Bariloche" },
  { title: "Jornada de Análisis Comunitario", date: "1 de marzo, 2025", location: "El Bolsón" },
];

const memberships = [
  { 
    name: "FACC", 
    fullName: "Federación Argentina de Cannabis y Cáñamo",
    details: "Resolución N° 550 – 29/6/23 – Registro N° 1.077",
    logo: logoFacc,
    link: "https://facc.org.ar"
  },
  { 
    name: "Verde Patagonia", 
    fullName: "Cooperativa de Trabajo Verde Patagonia",
    details: "Matrícula Nacional N° 62.714\nMatrícula Provincial N° 1.265",
    logo: logoVerdePatagonia,
    link: null
  },
];

const projects = [
  { 
    name: "Trazacann", 
    description: "Solución integrada para proyectos de producción agroindustrial de Cannabis.",
    website: "trazacann.com.ar",
    logo: logoTrazacann
  },
  { 
    name: "Cannacheck", 
    description: "Servicio de análisis de cannabis y productos derivados.",
    website: "cannacheck.com.ar",
    logo: logoCannacheck
  },
  { 
    name: "Cannalizar", 
    description: "App de gestión de pacientes, historia clínica y documentos de REPROCANN para profesionales.",
    website: "cannalizar.ar",
    logo: logoCannalizar
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Services */}
      <section className="relative py-8 md:py-10 bg-background">
        {/* Subtle fade gradient at top */}
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        <div className="container-main max-w-4xl">
          <h2 className="font-display text-lg md:text-xl font-bold text-primary text-center mb-1 tracking-wide uppercase">
            Servicios
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {services.map((service, i) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <Link 
                  to={service.href}
                  className="block rounded-md overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="font-display text-[10px] md:text-xs font-medium text-foreground uppercase tracking-wide group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events - Modern Horizontal Scroll */}
      <section className="py-10 md:py-14 bg-muted/30 overflow-hidden">
        <div className="container-main">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Próximos eventos</h2>
            <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary">
              <Link to="/eventos">Ver todos <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 lg:px-16 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {upcomingEvents.map((event, i) => (
              <motion.article 
                key={event.title}
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-72 md:w-80 snap-start"
              >
                <div className="bg-card rounded-2xl p-5 border border-border hover:border-primary/40 transition-all duration-300 h-full group cursor-pointer hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-sage/20 text-primary flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {event.location}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium">{event.date}</p>
                </div>
              </motion.article>
            ))}
            {/* Spacer for last item visibility */}
            <div className="flex-shrink-0 w-4" />
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none hidden md:block" />
        </div>
      </section>

      {/* Memberships */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-main">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-center mb-2 tracking-wide uppercase">
            Somos miembros de
          </h2>
          <div className="w-full h-px bg-primary/30 mb-10" />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {memberships.map((m, i) => (
              <motion.div 
                key={m.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">{m.name}</h3>
                <div className="flex justify-center mb-6">
                  <img 
                    src={m.logo} 
                    alt={`Logo ${m.name}`} 
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground text-sm mb-2">{m.fullName}</p>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{m.details}</p>
                {m.link && (
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <a href={m.link} target="_blank" rel="noopener noreferrer">
                      Conocé más <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-main">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-center mb-2 tracking-wide uppercase">
            Proyectos que apoyamos
          </h2>
          <div className="w-full h-px bg-primary/30 mb-10" />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((p, i) => (
              <motion.div 
                key={p.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">{p.name}</h3>
                <div className="flex justify-center mb-6 h-24">
                  <img 
                    src={p.logo} 
                    alt={`Logo ${p.name}`} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground text-sm mb-4 min-h-[3rem]">{p.description}</p>
                <a 
                  href={`https://${p.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {p.website}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">¿Querés ser parte de Ciencia Sativa?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto text-sm md:text-base">Sumate a nuestra comunidad y ayudanos a seguir trabajando por el acceso a la salud.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg px-8">
              <Link to="/asociate">Asociate ahora <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="border-white/50 hover:bg-white/10">
              <Link to="/donar">Donar</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
