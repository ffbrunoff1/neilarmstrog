import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Rocket } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'legacy', label: 'Legado' },
    { id: 'contact', label: 'Contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-full ${
              scrolled 
                ? 'bg-gradient-to-br from-primary-500 to-accent-500' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Rocket className={`w-8 h-8 ${
                scrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Neil Armstrong
              </span>
              <span className={`text-xs md:text-sm ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Explorador Espacial
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-accent-300'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            Inspire-se
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-xl mt-2"
        >
          <div className="py-4 px-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-3 rounded-full font-semibold"
            >
              Inspire-se
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}