import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | LensCraft Studios</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-display text-[12rem] md:text-[16rem] leading-none tracking-wider text-primary mb-4">
            404
          </h1>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-6">
            SCENE NOT <span className="text-primary">FOUND</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-md mx-auto">
            Looks like this frame got left on the cutting room floor. 
            Let's get you back to the main feature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-gold inline-flex items-center gap-2">
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline-gold inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
