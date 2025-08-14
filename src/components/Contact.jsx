import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, User, Send, CheckCircle, AlertCircle, Rocket, Star, Globe } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Inspiração por Email",
      description: "Receba citações e reflexões inspiradoras baseadas no legado de Neil Armstrong",
      action: "inspiration@neilarmstrong.com"
    },
    {
      icon: MessageSquare,
      title: "Compartilhe sua História",
      description: "Conte-nos como o legado de Armstrong inspirou seus próprios sonhos e conquistas",
      action: "Envie sua mensagem"
    },
    {
      icon: Rocket,
      title: "Projetos Educacionais",
      description: "Explore oportunidades de parceria em projetos educacionais sobre exploração espacial",
      action: "Saiba mais"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 text-primary-200 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-10 text-accent-200 opacity-40"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe className="w-10 h-10" />
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
            <Rocket className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-medium">Conecte-se</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Inspire-se e
            <span className="block text-gradient">Compartilhe Sonhos</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Assim como Neil Armstrong inspirou milhões, sua jornada também pode inspirar outros. 
            Compartilhe seus sonhos, dúvidas ou reflexões conosco.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Comece Sua Jornada de Inspiração
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                O legado de Neil Armstrong continua a inspirar pessoas ao redor do mundo. 
                Seja você um estudante, educador, profissional ou simplesmente alguém que 
                sonha com as estrelas, estamos aqui para conectar e inspirar.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {info.description}
                      </p>
                      <span className="text-primary-600 font-semibold">
                        {info.action}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Star className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
                  "Eu acredito que cada ser humano tem um potencial finito e infinito. 
                  Eu fiz uma vida estudando o potencial infinito."
                </blockquote>
                <cite className="text-white/90 font-medium">
                  — Neil Armstrong
                </cite>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Compartilhe Sua Inspiração
                </h3>
                <p className="text-gray-600">
                  Envie-nos uma mensagem e faça parte desta jornada inspiradora
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu Nome
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sua Mensagem
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Compartilhe como o legado de Neil Armstrong inspirou você, ou conte-nos sobre seus próprios sonhos e aspirações..."
                    ></textarea>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-800">Mensagem enviada com sucesso!</h4>
                      <p className="text-green-600 text-sm">Obrigado por compartilhar sua inspiração conosco.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-800">Erro ao enviar mensagem</h4>
                      <p className="text-red-600 text-sm">Tente novamente em alguns instantes.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}