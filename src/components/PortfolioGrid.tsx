import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink, View } from "lucide-react";
import { useEffect } from "react";

interface PortfolioItem {
  id: number;
  title?: string;
  category: string;
  thumbnail?: string;
  videoUrl?: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  showAll?: boolean;
}

export function PortfolioGrid({ items, showAll = false }: PortfolioGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const displayItems = showAll ? items : items.slice(0, 6);

  useEffect(() => {
    if (hoveredId !== null && videoRefs.current[hoveredId]) {
      videoRefs.current[hoveredId]?.play();
    } else {
      Object.values(videoRefs.current).forEach(video => video?.pause());
    }
  }, [hoveredId]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {displayItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          animate={View ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="card-portfolio aspect-[4/3] cursor-pointer"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {item.videoUrl ? (
            <video
              ref={(el) => (videoRefs.current[item.id] = el)}
              src={item.videoUrl}
              muted
              loop
              autoPlay
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-500 ${
              hoveredId === item.id ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Content */}
          <div
            className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
              hoveredId === item.id
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-primary text-xs uppercase tracking-widest font-body mb-2">
              {item.category}
            </span>
            <h3 className="font-display text-2xl tracking-wider text-foreground">
              {item.title}
            </h3>
          </div>

          {/* Play Button */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              hoveredId === item.id
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-gold">
              <Play size={24} className="text-primary-foreground ml-1" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
