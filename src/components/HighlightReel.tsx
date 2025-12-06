import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export function HighlightReel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-body mb-4 block">
            Featured Work
          </span>
          <h2 className="section-title text-foreground">
            HIGHLIGHT <span className="text-primary">REEL</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video max-w-5xl mx-auto rounded-sm overflow-hidden group"
        >
          {/* Placeholder for video - using iframe for demo */}
          <div className="absolute inset-0 bg-card">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0"
              title="Highlight Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Decorative Frame */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-sm pointer-events-none" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto font-body"
        >
          A curated collection of my finest work spanning weddings, commercial shoots, 
          and creative projects. Every frame crafted with passion and precision.
        </motion.p>
      </div>
    </section>
  );
}
