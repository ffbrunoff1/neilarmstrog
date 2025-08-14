import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Lightbulb, Rocket, Star, Globe, Zap, Award, Target, Heart } from 'lucide-react'

export default function Services() {
  const legacyAreas = [
    {
      icon: BookOpen,
      title: "Educação Científica",
      description: "Inspire-se no método científico e na busca incansável pelo conhecimento que levaram Armstrong às estrelas.",
      highlights: ["Pensamento crítico", "Pesquisa sistemática", "Inovação tecnológica"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Liderança Inspiradora",
      description: "Aprenda sobre liderança autêntica e como comandar equipes em direção a objetivos extraordinários.",
      highlights: ["Trabalho em equipe", "Comunicação eficaz", "Tomada de decisão"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Lightbulb,
      title: "Inovação Tecnológica",
      description: "Descubra como a curiosidade e a engenhosidade podem revolucionar nossa compreensão do universo.",
      highlights: ["Soluções criativas", "Tecnologia avançada", "Pensamento inovador"],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Perseverança e Precisão",
      description: "Desenvolva a disciplina e a precisão necessárias para alcançar objetivos aparentemente impossíveis.",
      highlights: ["Foco absoluto", "Preparação rigorosa", "Execução perfeita"],
      color: "from-green-500 to-teal-600"
    }
  ]

  const inspirationValues = [
    {
      icon: Rocket,
      title: "Ouse Sonhar Grande",
      description: "Neil Armstrong nos ensinou que não há limite para nossos sonhos quando temos determinação.",
      impact: "Transforme impossível em possível"
    },
    {
      icon: Star,
      title: "Excelência Técnica",
      description: "A busca pela perfeição técnica foi fundamental para o sucesso das missões espaciais.",
      impact: "Domine suas habilidades"
    },
    {
      icon: Globe,
      title: "Visão Global",
      description: "A perspectiva da Terra do espaço nos ensina sobre unidade e responsabilidade planetária.",
      impact: "Pense além das fronteiras"
    },
    {
      icon: Heart,
      title: "Humildade e Serviço",
      description: "Apesar da fama mundial, Armstrong manteve-se humilde e dedicado ao serviço da humanidade.",
      impact: "Sirva um propósito maior"
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="legacy" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 left-10 text-primary-200 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-accent-200 opacity-40"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket className="w-12 h-12" />
      </motion.div>

      <div className="container-max section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-6 py-2 mb-6"
          >
            <Award className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-medium">Legado Inspirador</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lições que
            <span className="block text-gradient">Transformam Vidas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O legado de Neil Armstrong vai muito além da conquista lunar. Descubra como seus 
            princípios e valores podem inspirar suas próprias jornadas rumo ao extraordinário.
          </p>
        </motion.div>

        {/* Legacy Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {legacyAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`bg-gradient-to-r ${area.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Inspiration Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Valores que Inspiram
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios fundamentais que guiaram Neil Armstrong e podem transformar sua jornada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirationValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {value.description}
                </p>
                
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-3">
                  <span className="text-sm font-semibold text-primary-700">
                    {value.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 text-center mt-20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-20 right-20">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-10 left-1/4">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div className="absolute bottom-20 right-10">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="relative z-10 space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para Sua Própria Jornada?
            </h3>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Assim como Neil Armstrong transformou sonhos em realidade, você também pode 
              alcançar suas próprias estrelas. Comece sua jornada de inspiração hoje.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span>Inspire-se Agora</span>
              <Star className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}