import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, Heart, Facebook, Twitter, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Início", action: () => scrollToSection('hero') },
        { name: "Sobre", action: () => scrollToSection('about') },
        { name: "Legado", action: () => scrollToSection('legacy') },
        { name: "Contato", action: () => scrollToSection('contact') }
      ]
    },
    {
      title: "Inspiração",
      links: [
        { name: "Educação Científica", action: () => scrollToSection('legacy') },
        { name: "Liderança", action: () => scrollToSection('legacy') },
        { name: "Inovação", action: () => scrollToSection('legacy') },
        { name: "Perseverança", action: () => scrollToSection('legacy') }
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Citações Inspiradoras", action: () => scrollToSection('about') },
        { name: "Conquistas Históricas", action: () => scrollToSection('about') },
        { name: "Valores e Princípios", action: () => scrollToSection('legacy') },
        { name: "Projetos Educacionais", action: () => scrollToSection('contact') }
      ]
    }
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/neilarmstrong",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/neilarmstrong",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:inspiration@neilarmstrong.com",
      color: "hover:text-red-500"
    }
  ]

  const achievements = [
    { icon: Rocket, text: "Primeiro homem na Lua" },
    { icon: Star, text: "Comandante Apollo 11" },
    { icon: Globe, text: "Inspiração mundial" },
    { icon: Heart, text: "Legado eterno" }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 stars opacity-20"></div>
      
      <motion.div
        className="absolute top-20 left-10 text-primary-400 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-accent-400 opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket className="w-10 h-10" />
      </motion.div>

      <div className="container-max section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-full">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    Neil Armstrong
                  </span>
                  <span className="text-sm text-gray-400">
                    Explorador Espacial
                  </span>
                </div>
              </motion.div>

              <p className="text-gray-300 leading-relaxed">
                Honrando o legado do primeiro homem a pisar na Lua e inspirando 
                futuras gerações a alcançarem as estrelas através da ciência, 
                tecnologia e determinação.
              </p>

              {/* Achievements Icons */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2 border border-white/10"
                  >
                    <achievement.icon className="w-5 h-5 text-accent-400" />
                    <span className="text-sm text-gray-300 font-medium">
                      {achievement.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-full ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={link.action}
                        className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-t border-white/10"
        >
          <div className="text-center space-y-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto"
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-white max-w-4xl mx-auto leading-relaxed">
              "That's one small step for man, one giant leap for mankind."
            </blockquote>
            
            <cite className="text-accent-400 font-medium text-lg">
              — Neil Armstrong, 20 de Julho de 1969
            </cite>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <span>© {currentYear} Neil Armstrong Legacy</span>
            <span>•</span>
            <span>Inspirando futuras gerações</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors duration-300"
          >
            <span className="text-sm">Criado com</span>
            <Heart className="w-4 h-4 text-red-500" />
            <a 
              href="https://papum.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-accent-400 transition-colors duration-300"
            >
              Papum
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}