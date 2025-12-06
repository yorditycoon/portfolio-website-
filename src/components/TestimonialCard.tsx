import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="p-8 bg-card border border-border rounded-sm relative group hover:border-primary/30 transition-colors duration-500"
    >
      {/* Quote Icon */}
      <Quote
        size={48}
        className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
      />

      {/* Quote Text */}
      <p className="text-foreground/90 font-body text-lg leading-relaxed mb-8 relative z-10">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-display text-lg text-primary">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-display text-lg tracking-wider text-foreground">
            {author}
          </h4>
          <p className="text-muted-foreground text-sm font-body">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
