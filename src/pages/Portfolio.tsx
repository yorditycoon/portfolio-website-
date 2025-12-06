import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { cn } from "@/lib/utils";
import modeling1 from "@/assets/1.jpg";
import modeling2 from "@/assets/dott.mp4";
import modeling3 from "@/assets/tiktk.mp4";
import modeling4 from "@/assets/2 (2).jpg";
import modeling5 from "@/assets/4.jpg";
import modeling6 from "@/assets/3.jpg";
import modeling7 from "@/assets/5.jpg";
import modeling8 from "@/assets/6.jpg";
import weddings1 from "@/assets/weddd.mp4";
import weddings2 from "@/assets/www.jpg";
import weddings3 from "@/assets/wwww.jpg";
import weddings4 from "@/assets/wwwwq.jpg";
import weddings5 from "@/assets/wwwwqqq.jpg";
import weddings6 from "@/assets/wwwwww.jpg";
import weddings7 from "@/assets/wwwwwwwq.jpg";
import weddings8 from "@/assets/wwwwwwwww.jpg";
import weddings9 from "@/assets/wwwwwwwwwwwwwe.jpg";
import events1 from "@/assets/aa.jpg";
import events2 from "@/assets/aaa.jpg";
import events3 from "@/assets/aaaa.jpg";
import events4 from "@/assets/aaaaa.jpg";
import events5 from "@/assets/aaaaaa.jpg";
import events6 from "@/assets/aaaaaaaa.jpg";
import events7 from "@/assets/aaaaaaaaa.jpg";
import events8 from "@/assets/aaaaaaaaaaaa.jpg";
import events9 from "@/assets/aaaaaaaaa.jpg";
import events10 from "@/assets/aaaaaaaaaaaaaaa.jpg";
import marketings1 from "@/assets/retouch_2025103121121577.jpg";
import marketings2 from "@/assets/retouch_2025103121374229.jpg";
import marketings3 from "@/assets/retouch_2025103121381060.jpg";
import marketings4 from "@/assets/11.jpg";
import marketings5 from "@/assets/141.jpg";
import marketings6 from "@/assets/retouch_2025103121384224.jpg";



const categories = [
  { id: "all", name: "All Work" },
  { id: "weddings", name: "Weddings" },
  { id: "models", name: "Model Shoots" },
  { id: "events", name: "Events" },
  { id: "marketings", name: "Marketings" },
];

const portfolioItems = [
  {
    id: 1,
    category: "models",
    thumbnail: modeling1,
  },
  {
    id: 5,
    category: "models",
    videoUrl: modeling2,
  },
  
  {
    id: 2,
    category: "models",
    videoUrl:modeling3,
  },
  {
    id: 3,
     category: "models",
    thumbnail: modeling4,
  },

  {
    id: 4,
    category: "models",
    thumbnail: modeling5,
  },
  
  {
    id: 6,
    category: "models",
    thumbnail: modeling6,
   },
  {
    id: 7,
   category: "models",
    thumbnail: modeling7,  
  },
  {
    id: 8,
    category: "models",
    thumbnail: modeling8,
   },
  {
    id: 9,
   
    category: "models",
    thumbnail: modeling1,
    },
  {
    id: 10,

    category: "models",
    thumbnail: modeling1,
  },
  {
     id: 11,
    category: "weddings",
    thumbnail: weddings1,
  },
  {
    id: 12,

    category: "weddings",
    videoUrl: weddings2
  },
  {
    id: 13,
    title: "Restaurant Commercial",
    category: "weddings",
    thumbnail: weddings3
  },
  {
     id: 14,
    category: "weddings",
    thumbnail: weddings4,
  },
{   id: 15,
    category: "weddings",
    thumbnail: weddings5
  },
  {
     id: 16,
    category: "weddings",
    thumbnail: weddings6,
  },
  {
     id: 17,
    category: "weddings",
    thumbnail: weddings7,
  },
   {id: 18,
    category: "weddings",
    thumbnail: weddings8
  },
  {
    id: 19,
    category: "weddings",
    thumbnail: weddings9
  },
{
    id: 20,
    category: "events",
    thumbnail: events1,
},
{
    id: 21,
    category: "events",
    thumbnail: events2,
},
{
    id: 22,
    category: "events",
    thumbnail: events3,
},
{
    id: 23,
    category: "events",
    thumbnail: events4,
},
{
    id: 24,
    category: "events",
    thumbnail: events5,
},
{
    id: 25,
    category: "events",
    thumbnail: events6,
},
{
    id: 26,
    category: "events",
    thumbnail: events7,
},
{
    id: 27,
    category: "events",
    thumbnail: events8,
},
{
    id: 28,
    category: "events",
    thumbnail: events9,
},
{
    id: 29,
    category: "events",
    thumbnail: events10,
},
{
    id: 30,
    category: "marketings",
    thumbnail: marketings1,
},
{
    id: 31,
    category: "marketings",
    thumbnail: marketings2,
},
{
    id: 32,
    category: "marketings",
    thumbnail: marketings3,
},
{
    id: 33,
    category: "marketings",
    thumbnail: marketings4,
},
{
    id: 34,
    category: "marketings",
    thumbnail: marketings5,
},
{
    id: 35,
    category: "marketings",
    thumbnail: marketings6,
},



];

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.some((c) => c.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Mikey G/Hiwot</title>
        <meta
          name="description"
          content="Explore my portfolio of wedding films, model shoots, corporate events, and digital marketing videos. See cinematic work in action."
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
                My Work
              </span>
              <h1 className="font-display text-6xl md:text-8xl tracking-wider text-foreground">
                PORT<span className="text-primary">FOLIO</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "px-6 py-3 font-body text-sm uppercase tracking-widest transition-all duration-300 rounded-sm",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary border border-border hover:border-primary/50"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <PortfolioGrid items={filteredItems} showAll />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
