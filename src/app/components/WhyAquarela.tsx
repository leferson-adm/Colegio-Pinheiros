import React, { useState } from 'react';
import { CheckCircle, Heart, Users, Award, BookOpen, Shield, History, UserCheck, Lightbulb, Target } from 'lucide-react';

export function WhyAquarela() {
  const [activeTab, setActiveTab] = useState<string>('nossa-historia');

  const tabs = [
    { id: 'nossa-historia', label: 'Nossa História', icon: History },
    { id: 'equipe', label: 'Equipe', icon: UserCheck },
    { id: 'metodologia', label: 'Metodologia', icon: Lightbulb },
    { id: 'proposito', label: 'Propósito, Visão e Valores', icon: Target },
  ];

  const content = {
    'nossa-historia': {
      title: 'Nossa História',
      description: 'Com mais de 14 anos de dedicação à educação infantil, o Colégio Aquarela Brasília foi fundado com o propósito de oferecer uma educação de qualidade, pautada no respeito, na criatividade e no desenvolvimento integral da criança.',
      items: [
        'Fundado em 2011 com o sonho de transformar vidas',
        'Mais de 500 famílias já confiaram na nossa metodologia',
        'Reconhecimento pela qualidade educacional e atendimento humanizado',
        'Evolução constante com base nas melhores práticas pedagógicas',
        'Parceria sólida com as famílias ao longo dos anos',
      ],
    },
    'equipe': {
      title: 'Equipe Especializada',
      description: 'Nossa equipe é formada por profissionais qualificados, apaixonados pela educação e comprometidos com o desenvolvimento de cada criança. Investimos constantemente em formação continuada para garantir o melhor ensino.',
      items: [
        'Professores especializados em Educação Infantil',
        'Formação continuada e atualização pedagógica constante',
        'Equipe multidisciplinar: psicopedagogos, nutricionistas e coordenadores',
        'Profissionais comprometidos com o bem-estar das crianças',
        'Atendimento humanizado e próximo às famílias',
      ],
    },
    'metodologia': {
      title: 'Metodologia Sociointeracionista',
      description: 'Adotamos uma metodologia que valoriza a interação social, o protagonismo da criança e o aprendizado significativo. Cada atividade é planejada para desenvolver habilidades cognitivas, sociais e emocionais.',
      items: [
        'Aprendizado através da experiência e da descoberta',
        'Respeito ao tempo e individualidade de cada criança',
        'Atividades lúdicas que estimulam criatividade e autonomia',
        'Projetos pedagógicos integrados e contextualizados',
        'Ambiente acolhedor que favorece o desenvolvimento integral',
      ],
    },
    'proposito': {
      title: 'Propósito, Visão e Valores',
      description: 'Nossos valores norteiam todas as ações do Colégio Aquarela. Acreditamos em uma educação que forma cidadãos conscientes, criativos e preparados para o futuro.',
      items: [
        'Propósito: Educar com amor, respeito e excelência',
        'Visão: Ser referência em educação infantil em Brasília',
        'Valores: Ética, respeito, criatividade, responsabilidade e afeto',
        'Compromisso com a formação integral da criança',
        'Parceria genuína entre escola e família',
      ],
    },
  };

  return (
    <section id="por-que-aquarela" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Por que o{' '}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Colégio Aquarela?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Conheça os diferenciais que fazem do Colégio Aquarela Brasília a melhor escolha para o seu filho
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-4 gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${activeTab === tab.id ? 'text-white' : 'text-blue-600'}`} />
                  <div className="text-sm">{tab.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl text-gray-900 mb-6">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {content[activeTab as keyof typeof content].description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {content[activeTab as keyof typeof content].items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl lg:text-3xl mb-4">
            14 Anos Transformando Vidas
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Com mais de uma década de experiência, o Colégio Aquarela Brasília se consolida como 
            referência em educação infantil, proporcionando um ambiente onde cada criança pode 
            desenvolver todo seu potencial.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-sm opacity-90">Famílias Atendidas</div>
            </div>
            <div>
              <div className="text-4xl mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl mb-2">14+</div>
              <div className="text-sm opacity-90">Anos de História</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
