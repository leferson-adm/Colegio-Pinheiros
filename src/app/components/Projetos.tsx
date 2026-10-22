import React from 'react';
import { ChefHat, BookOpen, Sprout, Heart, Drama, Building2, Users, Plane, Globe, Music, Trophy } from 'lucide-react';

export function Projetos() {
  const whatsappNumber = '5561991549109';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de conhecer os projetos do Colégio Aquarela Brasília.');

  const projetos = [
    {
      icon: ChefHat,
      title: 'Cozinha Experimental',
      description: 'Alimentação saudável e consciente através de atividades práticas na cozinha.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Projeto Literário',
      description: 'Caixa mágica - incentivo à leitura e imaginação através de histórias encantadoras.',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Sprout,
      title: 'Projeto Horta',
      description: 'Plantar, cultivar e colher - conexão com a natureza e alimentação sustentável.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Projeto Socioemocional',
      description: 'Bons hábitos e apoio às famílias - desenvolvimento integral da criança.',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Drama,
      title: 'Teatrinho',
      description: 'A hora do conto - expressão artística e desenvolvimento da comunicação.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building2,
      title: 'Projeto Brasília',
      description: 'Expo Aquarela - conhecendo nossa capital e valorizando a cultura local.',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Users,
      title: 'Profissões',
      description: 'Família + escola = sucesso - conhecendo o mundo profissional.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Plane,
      title: 'Passeios Pedagógicos',
      description: 'Explore o mundo - aprendizado além da sala de aula.',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Globe,
      title: 'Inglês',
      description: 'Aprendizado do idioma de forma lúdica e natural desde a primeira infância.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Music,
      title: 'Musicalização',
      description: 'Desenvolvimento musical e sensorial através de sons, ritmos e melodias.',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Trophy,
      title: 'Esportes',
      description: 'Atividades físicas que promovem saúde, coordenação e trabalho em equipe.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Nossos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Atividades e projetos pedagógicos que enriquecem a experiência educacional
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projetos.map((projeto, index) => {
            const Icon = projeto.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${projeto.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{projeto.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{projeto.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-shadow"
          >
            Conheça Nossos Projetos
          </a>
        </div>
      </div>
    </section>
  );
}