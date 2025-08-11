import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Github, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Instagram', icon: <Instagram size={18} />, href: "https://www.instagram.com/grimacompany/" },
        { name: 'Github', icon: <Github size={18} />, href: "https://github.com/keremuysal" },
        { name: 'Linkedin', icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/akeremuysal/" },
    ];
    
    const navLinks = [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Hizmetler", href: "/hizmetler" },
      { name: "Referanslar", href: "/referanslar" },
      { name: "İletişim", href: "/iletisim" }
    ];

    return (
        <motion.footer 
            className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                         <Link to="/" className="flex items-center gap-2">
                            <Rocket className="w-6 h-6 text-indigo-500" />
                            <span className="font-bold text-lg text-gray-900 dark:text-white">
                              Tech&Lab
                            </span>
                         </Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                       {navLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                          >
                            {link.name}
                          </Link>
                        ))}
                    </div>
                     <div className="flex justify-center md:justify-end items-center gap-4">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Tech&Lab. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
