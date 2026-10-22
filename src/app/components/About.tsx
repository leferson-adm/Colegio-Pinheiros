import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Cuidado e Atenção',
      description: 'Cada aluno é tratado de forma individual, respeitando seu ritmo e suas características.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Award,
      title: 'Excelência Acadêmica',
      description: 'Metodologias comprovadas que garantem o melhor desenvolvimento educacional.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Comunidade Escolar',
      description: 'Um ambiente acolhedor onde família e escola caminham juntas.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Sparkles,
      title: 'Criatividade',
      description: 'Estimulamos a imaginação e a expressão artística em todas as atividades.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Sobre o{' '}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Colégio Aquarela Brasília
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Há mais de 14 anos, o Colégio Aquarela Brasília vem transformando vidas através da educação. 
            Nossa missão é formar cidadãos conscientes, críticos e preparados para os desafios do futuro.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl text-gray-900">
                Missão e Valores
              </h3>
              <p className="text-gray-600">
                O Colégio Aquarela Brasília tem como missão proporcionar um ambiente seguro, acolhedor 
                e estimulante, que promova o desenvolvimento integral das crianças nos aspectos físicos, 
                emocionais, sociais e cognitivos. Essa fase inicial da educação é fundamental para 
                estabelecer bases sólidas para o aprendizado futuro.
              </p>
              <p className="text-gray-600">
                O projeto pedagógico é fundamentado nos pressupostos sociointeracionistas elaborados 
                com estratégias e objetivos claros, coerentes e consistentes, de acordo com as 
                necessidades das crianças e com as expectativas das famílias.
              </p>
              <p className="text-gray-600">
                Nesse sentido, a comunicação entre a escola, as famílias e a comunidade são fundamentais 
                para o sucesso da Educação Infantil. O Colégio Aquarela Brasília procura manter um diálogo 
                aberto e transparente com as famílias, promovendo a participação dos pais na educação dos 
                filhos, oferecendo oportunidades de envolvimento nas atividades da escola e de orientação 
                sobre o desenvolvimento infantil.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
                <span className="text-sm text-gray-500">Educação de qualidade desde 2010</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDY2MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Crianças aprendendo no Colégio Aquarela"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}