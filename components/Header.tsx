import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Rocket } from 'lucide-react';

const navLinks = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "İletişim", href: "/iletisim" }
];

const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10"></div>
      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
             <Rocket className="w-6 h-6 text-indigo-500" />
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              Tech&Lab
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive 
                    ? 'text-indigo-500 dark:text-indigo-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
