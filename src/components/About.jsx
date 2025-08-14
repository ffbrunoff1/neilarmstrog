import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, Users, Target, Rocket, Star, Globe, Zap } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Rocket,
      title: "Apollo 11",
      description: "Comandante da missão histórica que levou o homem à Lua pela primeira vez",
      date: "1969"
    },
    {
      icon: Award,
      title: "Medalha de Honra",
      description: "Recebeu diversas condecorações por suas contribuições à exploração espacial",
      date: "1970"
    },
    {
      icon: Users,
      title: "Inspiração Global",
      description: "Inspirou milhões de pessoas ao redor do mundo a sonhar com as estrelas",
      date: "Sempre"
    },
    {
      icon: Target,
      title: "Precisão Técnica",
      description: "Demonstrou excepcional habilidade como piloto de teste e astronauta",
      date: "1955-1971"
    }
  ]

  const stats = [
    { number: "21", label: "Horas na Lua", icon: Globe },
    { number: "8", label: "Dias no Espaço", icon: Rocket },
    { number: "1", label: "Primeiro Passo", icon: Star },
    { number: "∞", label: "Inspiração", icon: Zap }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white"></div>
      
      <motion.div
        className="absolute top-20 right-10 text-primary-200 opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-12 h-12" />
      </motion.div>

      <div className="container-max section-padding relative z-10">
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
            <Rocket className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-medium">Sobre o Pioneiro</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Um Legado que
            <span className="block text-gradient">Transcende o Tempo</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Neil Armstrong não foi apenas o primeiro homem a pisar na Lua. Ele foi um visionário 
            que transformou o impossível em realidade, inspirando gerações a olhar para o céu 
            e sonhar sem limites.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Da Terra às Estrelas
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Em 20 de julho de 1969, Neil Armstrong fez história ao se tornar o primeiro 
                  ser humano a pisar na superfície lunar. Mas sua jornada começou muito antes, 
                  com anos de dedicação, treinamento e uma paixão inabalável pela exploração.
                </p>
                
                <p>
                  Como piloto de teste da NASA, Armstrong demonstrou coragem excepcional e 
                  precisão técnica. Suas habilidades o levaram a ser selecionado para comandar 
                  a missão Apollo 11, uma responsabilidade que carregou com humildade e determinação.
                </p>
                
                <p>
                  Seu legado vai além da conquista espacial. Neil Armstrong representa o poder 
                  dos sonhos, a importância da ciência e tecnologia, e a capacidade humana de 
                  superar qualquer obstáculo quando trabalhamos juntos por um objetivo comum.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border-l-4 border-primary-500"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">20 de Julho de 1969</h4>
                  <p className="text-gray-600">
                    "That's one small step for man, one giant leap for mankind." 
                    Uma frase que ecoou pelo cosmos e continua inspirando a humanidade.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-primary-200 rounded-full"
              />
              
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-full p-8 aspect-square flex items-center justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-full p-8 shadow-2xl"
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-24 h-24 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${15 + i * 18}%`,
                    left: `${5 + i * 20}%`,
                  }}
                  animate={{
                    y: [-8, 8, -8],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                >
                  <div className="w-3 h-3 bg-accent-400 rounded-full opacity-60" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conquistas Históricas
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Marcos que definiram uma era e continuam inspirando futuras gerações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-gray-900">
                      {achievement.title}
                    </h4>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}