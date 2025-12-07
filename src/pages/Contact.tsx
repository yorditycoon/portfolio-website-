import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mikeyglife@gmail.com",
    href: "mailto:mikeyglife@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 918 040 607",
    href: "tel:+251918040607",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tigray, Mekelle",
    href: "#",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Contact = () => {
  const telegramMessage = encodeURIComponent(
    "Hi! I'm interested in your videography services."
  );

  return (
    <>
      <Helmet>
        <title>Contact | Mikey G/Hiwot</title>
        <meta
          name="description"
          content="Get in touch to discuss your video project. Available for weddings, events, model shoots, and commercial content. Let's create something amazing together."
        />
      </Helmet>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-body mb-4 block">
                Get In Touch
              </span>
              <h1 className="font-display text-6xl md:text-8xl tracking-wider text-foreground">
                CON<span className="text-primary">TACT</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl tracking-wider text-foreground mb-6">
                  LET'S <span className="text-primary">TALK</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg mb-10">
                  Ready to bring your vision to life? I'd love to hear about
                  your project. Reach out and let's create something amazing
                  together.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                        <info.icon
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-body block">
                          {info.label}
                        </span>
                        <span className="text-foreground font-body group-hover:text-primary transition-colors">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://t.me/kimi_pido?text=${telegramMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-body font-semibold rounded-sm hover:bg-[#128C7E] transition-colors duration-300 mb-10"
                >
                  <MessageCircle size={20} />
                  Chat Telegram
                </a>

                {/* Social Links */}
                <div>
                  <h3 className="font-display text-xl tracking-wider text-foreground mb-4">
                    FOLLOW ME
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-foreground/70 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Send Message Button */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <a
                  href={`https://t.me/+251918040607?text=${telegramMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-3 px-8 py-4 font-body font-semibold rounded-sm transition-colors duration-300"
                >
                  <Send size={20} />
                  Send Message
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
