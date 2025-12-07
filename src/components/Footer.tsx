import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Video, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/kimi_pido/", label: "Instagram" },
  { icon: Video, href: "https://www.tiktok.com/@kimi_pido", label: "TikTok" },
  { icon: Facebook, href: "https://www.facebook.com/miki.gebrehiwot.90", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="font-display text-4xl tracking-wider text-primary">
                MIKEY
              </span>
              <span className="font-display text-4xl tracking-wider text-foreground">
                G/HIWOT
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 font-body">
              Capturing life's most precious moments with cinematic excellence. 
              Specializing in weddings, events, model shoots, and digital marketing content.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-primary mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-primary mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:mikeyglife@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Mail size={18} />
                mikeyglife@gmail.com
              </a>
              <a
                href="tel:+25118040607"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Phone size={18} />
                +251 918 040 607
              </a>
              <div className="flex items-start gap-3 text-muted-foreground font-body">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Tigray, Mekelle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Nova Creatives. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors font-body"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors font-body"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
