import React from 'react';
import { motion } from 'framer-motion';

function Works() {
    const stepVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.5, 
                duration: 0.5,  
                type: 'spring', 
            },
        }),
    };
    return (
        <div>
            <section id="works" className="relative py-10 sm:py-16 lg:py-24" style={{ backgroundColor: '#459ab9' }}>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
                            How does it work?
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-base text-white leading-relaxed md:text-2xl">
                            Our AI solution will help you from start to finish
                        </p>
                    </div>
                    <div className="relative mt-12 lg:mt-20">
                        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <img
                                alt=""
                                loading="lazy"
                                width={1000}
                                height={500}
                                decoding="async"
                                data-nimg={1}
                                className="w-full"
                                style={{ color: "transparent" }}
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            />
                        </div>
                        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            {[1, 2, 3].map((step, i) => (
                                <motion.div
                                    key={i}
                                    custom={i} // Custom delay based on index
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={stepVariants}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                        <span className="text-xl font-semibold text-gray-700">{step}</span>
                                    </div>
                                    <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                                        {step === 1 ? 'Understanding Your Needs:' : step === 2 ? 'Customized Solutions:' : 'Development and Implementation'}
                                    </h3>
                                    <p className="mt-4 text-base text-white md:text-lg">
                                        {step === 1
                                            ? 'We begin by engaging with you to understand your business goals, challenges, and specific requirements.'
                                            : step === 2
                                            ? 'Based on the information gathered, we develop tailored service packages that address your unique objectives.'
                                            : 'Once the plan is in place, our expert team gets to work.'}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                    style={{
                        background:
                            "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)"
                    }}
                ></div>
            </section>
        </div>
    );
}

export default Works;
