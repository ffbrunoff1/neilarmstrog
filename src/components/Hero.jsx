import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-space-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 stars opacity-30"></div>
      
      <motion.div
        className="absolute top-20 left-10 text-accent-300 opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-primary-400 opacity-50"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe className="w-12 h-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-accent-400 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Rocket className="w-10 h-10" />
      </motion.div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-5 h-5 text-accent-300" />
                <span className="text-white/90 text-sm font-medium">Pioneiro da Exploração Espacial</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Neil
                <span className="block bg-gradient-to-r from-accent-300 to-primary-400 bg-clip-text text-transparent">
                  Armstrong
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                <span className="font-semibold text-accent-300">"Um pequeno passo para o homem,</span>
                <br />
                <span className="text-white">um grande salto para a humanidade."</span>
              </p>
              
              <p className="text-lg text-white/80 max-w-2xl">
                Aventure-se além das estrelas e inspire-se com o legado extraordinário do primeiro homem 
                a pisar na Lua. Descubra como uma jornada pode transformar toda a humanidade.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Descubra o Legado</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Inspire-se Agora</span>
                <Star className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Astronaut Illustration */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 bg-gradient-to-br from-accent-400/30 to-primary-500/30 rounded-full flex items-center justify-center"
                  >
                    <Rocket className="w-32 h-32 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbital Elements */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-8 border border-accent-300/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating Stars */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 12}%`,
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                >
                  <Star className={`w-4 h-4 text-accent-300 ${i % 2 === 0 ? 'opacity-60' : 'opacity-40'}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-white/60"
          >
            <span className="text-sm font-medium">Explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}