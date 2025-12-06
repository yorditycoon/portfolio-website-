import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { Award, Clock, Users, Film } from "lucide-react";
import Image from "@/assets/asasas.jpg";


const tools = [
  { name: "Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Lightroom", level: 88 },
  { name: "Photoshop", level: 92 },
];

const stats = [
  { icon: Film, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Clock, value: "10+", label: "Years Experience" },
];

const testimonials = [
  {
    quote:
      "Absolutely incredible work on our wedding video. Every moment was captured beautifully, and the final edit brought us to tears. Highly recommend!",
    author: "Sarah Mitchell",
    role: "Bride, 2024",
  },
  {
    quote:
      "The promotional video exceeded all our expectations. It perfectly captured our brand essence and has significantly boosted our engagement.",
    author: "James Chen",
    role: "Marketing Director, TechCorp",
  },
  {
    quote:
      "Working with Mikey was a dream. Professional, creative, and incredibly talented. The fashion shoot came out stunning.",
    author: "Maria Rodriguez",
    role: "Professional Model",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Mikey G/Hiwot</title>
        <meta
          name="description"
          content="Learn about Mikey G/Hiwot - professional videography and editing with 10+ years of experience in weddings, events, and commercial content."
        />
      </Helmet>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary uppercase tracking-widest text-sm font-body mb-4 block">
                  About Me
                </span>
                <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground mb-6">
                  CRAFTING <span className="text-primary">VISUAL</span>
                  <br />
                  STORIES
                </h1>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                  With over a decade of experience behind the camera and in the edit suite, 
                  I've dedicated my career to transforming ordinary moments into extraordinary 
                  cinematic experiences. My passion lies in capturing authentic emotions and 
                  crafting narratives that resonate.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  From intimate wedding ceremonies to high-energy corporate events, I bring 
                  a unique blend of technical expertise and creative vision to every project. 
                  My work has been featured in various publications and has earned recognition 
                  from industry peers worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-sm overflow-hidden">
                 <div className="aspect-[4/5] rounded-sm overflow-hidden">
  <img
    src={Image}
    alt="Professional videographer portrait"
    className="w-full h-full object-cover"
  />
</div>

                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-sm -z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-sm -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="font-display text-4xl md:text-5xl tracking-wider text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-body text-sm uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-body mb-4 block">
                Expertise
              </span>
              <h2 className="font-display text-5xl md:text-6xl tracking-wider text-foreground">
                TOOLS & <span className="text-primary">SKILLS</span>
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body font-medium text-foreground">
                      {tool.name}
                    </span>
                    <span className="text-primary font-body">{tool.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-gold rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-body mb-4 block">
                Testimonials
              </span>
              <h2 className="font-display text-5xl md:text-6xl tracking-wider text-foreground">
                CLIENT <span className="text-primary">REVIEWS</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.author}
                  {...testimonial}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default About;
