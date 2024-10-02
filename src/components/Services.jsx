import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Services() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Use intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20 my-20"
    >
      <motion.div
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {[
          {
            title: 'Next.js 13',
            description: 'App dir, Routing, Layouts, Loading UI and API routes.',
            iconPath: (
              <path d="M11.572 0c-.176 0-.31.001-.358.007..." />
            ),
          },
          {
            title: 'Feature 2',
            description: 'Description of feature 2.',
            iconPath: (
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235..." />
            ),
          },
          {
            title: 'Feature 3',
            description: 'Description of feature 3.',
            iconPath: (
              <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0..." />
            ),
          },
        ].map((feature, index) => (
          <motion.article
            key={index}
            className="rounded-lg border p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4 w-16 h-16 bg-white rounded-full mx-auto shadow-md">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {feature.iconPath}
              </svg>
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
