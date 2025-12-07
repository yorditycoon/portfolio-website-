import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
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
    value: "+251 18 040 607",
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

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
                  href={`https://t.me/251918040607?text=${telegramMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-body font-semibold rounded-sm hover:bg-[#128C7E] transition-colors duration-300 mb-10"
                >
                  <MessageCircle size={20} />
                  Chat on Telegram
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

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-sm p-8"
                >
                  <h3 className="font-display text-2xl tracking-wider text-foreground mb-6">
                    SEND A <span className="text-primary">MESSAGE</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-muted-foreground text-sm font-body mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-muted-foreground text-sm font-body mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-muted-foreground text-sm font-body mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-muted-foreground text-sm font-body mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="wedding">Wedding Videography</option>
                        <option value="model">Model Shoot</option>
                        <option value="event">Event Coverage</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-muted-foreground text-sm font-body mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
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
