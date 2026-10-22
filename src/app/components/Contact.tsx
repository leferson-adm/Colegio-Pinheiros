import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const whatsappNumber = '5561991549109';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    segment: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `*Solicitação de Matrícula - Colégio Aquarela Brasília*

*Dados do Responsável:*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

*Dados da Criança:*
Nome da Criança: ${formData.childName}
Idade: ${formData.childAge}
Segmento de Interesse: ${formData.segment}

*Mensagem:*
${formData.message || 'Gostaria de mais informações sobre a matrícula.'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Show success message
    alert('Obrigado! Sua solicitação será enviada pelo WhatsApp. Entraremos em contato em breve!');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      segment: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Brasília - DF',
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(61) 99154-9109\n(61) 3041-4444',
      color: 'red',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'colegioaquarella@gmail.com',
      color: 'blue',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 7h às 19h\nSábado: 8h às 12h',
      color: 'red',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Solicite sua{' '}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Matrícula
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Preencha o formulário abaixo e entraremos em contato para agendar uma visita!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const gradient = colorClasses[info.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{info.content}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h3 className="text-2xl text-gray-900 mb-6">Formulário de Matrícula</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="block text-sm text-gray-700 mb-2">
                    Nome da Criança *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    required
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Nome da criança"
                  />
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-sm text-gray-700 mb-2">
                    Idade da Criança *
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    required
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Ex: 2 anos"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="segment" className="block text-sm text-gray-700 mb-2">
                  Segmento de Interesse *
                </label>
                <select
                  id="segment"
                  name="segment"
                  required
                  value={formData.segment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="">Selecione um segmento</option>
                  <option value="Berçário">Berçário (4 meses a 1 ano)</option>
                  <option value="Maternal I e II">Maternal I e II (1 a 3 anos)</option>
                  <option value="Infantil I e II">Infantil I e II (4 a 5 anos)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades e expectativas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-4 rounded-xl hover:shadow-xl transition-shadow flex items-center justify-center gap-2 group"
              >
                Enviar Solicitação via WhatsApp
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será direcionado ao WhatsApp com suas informações preenchidas.
              </p>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9582757719544!2d-48.09688238511803!3d-15.805714689025632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzIwLjYiUyA0OMKwMDUnNDguOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Colégio Aquarela Brasília"
            />
          </div>
        </div>
      </div>
    </section>
  );
}