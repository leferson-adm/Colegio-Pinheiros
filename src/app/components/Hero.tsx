import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from 'figma:asset/360382fd703ec7635bad065be594fef5e7f14bf5.png';

export function Hero() {
  const whatsappNumber = '5561991549109';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de agendar uma visita ao Colégio Aquarela Brasília.');

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-red-50 to-blue-100 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-sm text-gray-700">Mais de 14 anos educando com excelência</span>
            </div>

            <h1 className="text-4xl lg:text-6xl text-gray-900">
              Bem-vindo ao{' '}
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Colégio Aquarela
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600">
              Onde cada criança é única e a educação acontece com cores, alegria e valores. 
              Desenvolvemos o potencial de cada aluno através de uma metodologia inovadora e humanizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-shadow group"
              >
                Agende uma Visita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:shadow-lg transition-shadow border-2 border-gray-200"
              >
                Conheça Nossa Escola
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl text-blue-600">14+</div>
                <div className="text-sm text-gray-600 mt-1">Anos de História</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-red-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Alunos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-blue-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Estudantes do Colégio Aquarela"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Metodologia</div>
                  <div className="text-gray-900 mt-1">Aprendizado Criativo e Personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}