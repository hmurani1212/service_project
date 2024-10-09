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
          RAAQUATECH offers customized solutions tailored to meet each client’s unique needs, ensuring optimal alignment with their business goals. Our expert team leverages the latest technologies and industry best practices to deliver high-quality results.</p>
      </motion.div>

      <motion.div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {[
          {
            title: 'Customized Solutions',
            description: 'Offer personalized service packages to meet the unique needs of each client, ensuring that solutions are aligned with their specific business goals.',
            iconPath: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.236-2.236 2.236 2.236 0 0 1 2.235 2.236zM15.83 9.736a3.001 3.001 0 0 0-3.001-3.001c-1.654 0-3 1.346-3 3.001s1.346 3.001 3 3.001c1.655 0 3.001-1.346 3.001-3.001zm4.338-4.748a2.997 2.997 0 0 0-3.751-.626l-3.044 1.577a2.98 2.98 0 0 0-1.464 1.626L11.5 8.387 9.415 6.302a2.997 2.997 0 0 0-4.25 0l-.002.002a2.997 2.997 0 0 0 0 4.25l4.571 4.571a2.997 2.997 0 0 0 4.25 0l1.802-1.802 1.05 1.05a2.997 2.997 0 0 0 4.251-4.251zM8.583 14.878a2.978 2.978 0 0 0 1.465-1.626l1.626 3.044a2.997 2.997 0 0 0 4.75-.626l1.05 1.05a2.997 2.997 0 0 0-4.25 0l-1.052-1.051-2.569 2.569a2.997 2.997 0 0 0 0 4.251l.002-.002a2.997 2.997 0 0 0 4.251-4.25L11.5 19.613l1.83-1.83a2.997 2.997 0 0 0 0-4.25zM5.751 9.747a2.997 2.997 0 0 0-4.25 0l-.002.002a2.997 2.997 0 0 0 0 4.25l1.051-1.051 2.569 2.569a2.997 2.997 0 0 0 4.251-4.251l-1.051-1.051-1.571 3.034a2.979 2.979 0 0 0 1.627 1.464l1.671-3.014a2.999 2.999 0 0 0 0-4.25z" />
              </svg>
            ),
          },
          {
            title: 'Expert Team',
            description: 'Highlight the expertise and experience of your team members in various technologies and industries.',
            iconPath: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v1h20v-1c0-3.33-6.69-5-10-5zM5 21h14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2zm7-17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6 7h-4c-.33-1.47-1.63-2.5-3-2.5S10.33 12.53 10 14H6c-1.11 0-2 .89-2 2v1h20v-1c0-1.11-.89-2-2-2zm-10 1c.68-1.49 2.21-2 3.79-2 1.58 0 3.11.51 3.79 2H8z" />
              </svg>
            ),
          },          
          {
            title: '24/7 Support',
            description: 'Provide dedicated support to clients anytime they need help, ensuring their operations run smoothly without any disruptions.',
            iconPath: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10.012 10.012 0 0 1-10 10zm-1-14V7h2v3h-2zm0 6h2v5h-2zm1-12a1 1 0 1 0-1 1 1 1 0 0 0 1-1zM4.8 5.1A2.6 2.6 0 0 1 6.4 3.5a2.6 2.6 0 0 1 1.6 1.6 2.5 2.5 0 0 1-1.5 3.1 2.4 2.4 0 0 1-1.7-.1A2.5 2.5 0 0 1 4.8 5.1zm14.4 1.1a2.6 2.6 0 0 1 1.6 1.6 2.5 2.5 0 0 1-1.5 3.1 2.4 2.4 0 0 1-1.7-.1A2.5 2.5 0 0 1 19.2 6.2zM5.8 15.8A4.4 4.4 0 0 1 4 12.4a4.3 4.3 0 0 1 1.8-2.6 4.1 4.1 0 0 1 3.5-.1A4.4 4.4 0 0 1 11.1 12a4.3 4.3 0 0 1-1.8 2.6 4.1 4.1 0 0 1-3.5.1zm12.4 0a4.4 4.4 0 0 1-1.8-2.6 4.3 4.3 0 0 1 1.8-2.6 4.1 4.1 0 0 1 3.5-.1 4.4 4.4 0 0 1 2 1.5 4.3 4.3 0 0 1-.2 6.1 4.1 4.1 0 0 1-3.5.1z" />
              </svg>
            ),
          }
          
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
