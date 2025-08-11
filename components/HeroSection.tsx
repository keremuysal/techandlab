import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const textStagger: Variants = {
        animate: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const textFadeUp: Variants = {
        initial: { y: 30, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "circOut" },
        },
    };

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden -mt-20">
            <div className="absolute inset-0 z-0 bg-white dark:bg-[#0A0A0A]">
                 <div className="absolute inset-0 bg-grid"></div>
            </div>
            <motion.div 
                className="absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            >
                <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[conic-gradient(from_90deg_at_50%_50%,#a655f7_0%,#6366f1_50%,#a655f7_100%)] animate-spin-slow"></div>
            </motion.div>

            <motion.div
                className="relative z-20 p-8 max-w-4xl mx-auto"
                variants={textStagger}
                initial="initial"
                animate="animate"
            >
                <motion.h1
                    className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white text-balance"
                    variants={textFadeUp}
                >
                    Fikirden Gerçeğe, Dijitalin Ötesinde.
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-balance"
                    variants={textFadeUp}
                >
                    Tech&Lab olarak, geleceği şekillendiren yenilikçi teknolojilerle markanızın potansiyelini en üst seviyeye taşıyoruz.
                </motion.p>
                <motion.div
                    className="mt-12"
                    variants={textFadeUp}
                >
                    <Link to="/hakkimizda" className="glowing-btn">
                        Hakkımızda
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
