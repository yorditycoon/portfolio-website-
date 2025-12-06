import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Camera, Megaphone, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Video,
    title: "Wedding Films",
    description:
      "Cinematic storytelling that captures the emotion, beauty, and unforgettable moments of your special day.",
    link: "/portfolio?category=weddings",
  },
  {
    icon: Camera,
    title: "Model Shoots",
    description:
      "High-fashion video content that showcases beauty, style, and personality with professional precision.",
    link: "/portfolio?category=models",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Engaging promotional content designed to elevate your brand and connect with your audience.",
    link: "/portfolio?category=marketing",
  },
  {
    icon: PartyPopper,
    title: "Event Coverage",
    description:
      "Dynamic event documentation that preserves the energy and highlights of corporate and social gatherings.",
    link: "/portfolio?category=events",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-body mb-4 block">
            What I Do
          </span>
          <h2 className="section-title text-foreground">
            MY <span className="text-primary">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={service.link}
                className="group block h-full p-8 bg-card border border-border rounded-sm transition-all duration-500 hover:border-primary/50 hover:shadow-gold"
              >
                <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <service.icon
                    size={32}
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-500"
                  />
                </div>
                <h3 className="font-display text-2xl tracking-wider text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
