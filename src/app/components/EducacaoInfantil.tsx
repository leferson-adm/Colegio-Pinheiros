import React from 'react';
import { Baby, Smile, Users, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bercarioImg from 'figma:asset/3c22b0cf21c877a257a268745d631450d04e3464.png';
import infantilImg from 'figma:asset/091d2e47850948eba544063cd879a7d7cd56f66c.png';

export function EducacaoInfantil() {
  const whatsappNumber = '5561991549109';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de fazer a matrícula no Colégio Aquarela Brasília.');

  const segments = [
    {
      id: 'bercario',
      icon: Baby,
      title: 'Berçário',
      subtitle: '12 a 24 meses',
      description: 'Um ambiente seguro, aconchegante e estimulante para os nossos pequeninos. Cuidamos com carinho e atenção de cada detalhe do desenvolvimento do seu bebê, promovendo estímulos sensoriais e afetivos fundamentais.',
      features: [
        'Berçaristas especializadas',
        'Ambiente climatizado e seguro',
        'Estimulação sensorial',
        'Rotina personalizada',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      image: bercarioImg,
    },
    {
      id: 'maternal-ii',
      icon: Smile,
      title: 'Maternal II',
      subtitle: '2 anos',
      description: 'Fase de descobertas e desenvolvimento da autonomia. As crianças exploram o mundo através de brincadeiras, música, arte e atividades que estimulam a coordenação motora, linguagem e socialização.',
      features: [
        'Atividades lúdicas e recreativas',
        'Desenvolvimento da linguagem',
        'Coordenação motora ampla',
        'Socialização e autonomia',
      ],
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100',
      image: 'https://images.unsplash.com/photo-1740493430383-a0bfff9550a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwbGVhcm5pbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0OTg2MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'maternal-iii',
      icon: Users,
      title: 'Maternal III',
      subtitle: '3 anos',
      description: 'Ampliação das experiências e aprofundamento do aprendizado. Nesta fase, as crianças desenvolvem maior independência, criatividade e habilidades sociais através de projetos e atividades dirigidas.',
      features: [
        'Projetos temáticos',
        'Desenvolvimento cognitivo',
        'Expressão artística',
        'Habilidades sociais',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      image: 'https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMHBsYXlpbmd8ZW58MXx8fHwxNzY0ODcwMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'infantil',
      icon: Star,
      title: 'Infantil I e II',
      subtitle: '4 e 5 anos',
      description: 'Preparação para o ensino fundamental com atividades que desenvolvem o raciocínio lógico, a criatividade e as habilidades socioemocionais. Introdução à alfabetização de forma lúdica e prazerosa.',
      features: [
        'Pré-alfabetização',
        'Raciocínio lógico-matemático',
        'Projetos pedagógicos',
        'Inglês e musicalização',
      ],
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100',
      image: infantilImg,
    },
  ];

  return (
    <section id="educacao-infantil" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Educação{' '}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Infantil
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Educação de qualidade, acompanhando cada fase do desenvolvimento do seu filho
          </p>
        </div>

        {/* Segments */}
        <div className="space-y-20">
          {segments.map((segment, index) => {
            const Icon = segment.icon;

            return (
              <div
                key={index}
                id={segment.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="space-y-6">
                    {/* Icon and title */}
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${segment.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl text-gray-900">{segment.title}</h3>
                        <p className={`text-sm bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent`}>
                          {segment.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {segment.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {segment.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 bg-gradient-to-br ${segment.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${segment.gradient} text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow group`}
                    >
                      Solicitar Matrícula
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${segment.bgGradient} rounded-3xl transform rotate-3`}></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                      <ImageWithFallback
                        src={segment.image}
                        alt={segment.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}