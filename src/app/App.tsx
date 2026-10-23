import React, { useState, useEffect, useRef } from "react";
import logoImg from "../assets/logo.png";
import logoHeaderImg from "../assets/logo-header.png";
import heroBg from "../assets/hero-bg.jpg";
import tafImg from "../assets/taf.jpg";
import ensinoInfantilImg from "../assets/ensino-infantil.jpg";
import ensinoFundamentalImg from "../assets/ensino-fundamental.jpg";
import saeLogo from "../assets/sae-logo.png";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Shield,
  Laptop,
  CheckCircle,
  Instagram,
  Facebook,
  Youtube,
  GraduationCap,
  Dumbbell,
  Star,
} from "lucide-react";

const WA_NUMBER = "5521971681314";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43c.004-.004.008-.007.01-.011.83-.84 1.33-1.99 1.33-3.26V8.75a8.16 8.16 0 0 0 4.39 1.25V6.69z" />
    </svg>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ensinoOpen, setEnsinoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (mobileOpen) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        // Rolando para baixo: sobe a barra (esconde)
        setVisible(false);
        setEnsinoOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Rolando para cima: desce a barra (mostra)
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setEnsinoOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setEnsinoOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            className="flex items-center gap-3 text-left"
            onClick={() => scrollTo("inicio")}
          >
            <img
              src={logoHeaderImg}
              alt="Centro Educacional Pinheiros"
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <div className="flex items-center">
              <span
                style={{ color: "#004aad" }}
                className="font-heading font-black text-2xl sm:text-3xl tracking-wider select-none leading-none"
              >
                C.E.P
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => scrollTo("inicio")}
              className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollTo("sobre")}
              className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              A Escola
            </button>

            {/* Ensino Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setEnsinoOpen(!ensinoOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
              >
                Ensino
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${ensinoOpen ? "rotate-180" : ""}`}
                />
              </button>
              {ensinoOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                  {[
                    "Educação Infantil",
                    "Ensino Fundamental",
                    "Ensino Médio",
                  ].map((label) => (
                    <button
                      key={label}
                      onClick={() => scrollTo("ensino")}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("cursos")}
              className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              Preparatórios
            </button>
            <button
              onClick={() => scrollTo("contato")}
              className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:block">
            <a
              href={waLink(
                "Olá! Gostaria de informações sobre matrícula no Centro Educacional Pinheiros."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Matricule-se
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1 pb-5">
            {[
              { label: "Início", id: "inicio" },
              { label: "A Escola", id: "sobre" },
              { label: "Educação Infantil", id: "ensino" },
              { label: "Ensino Fundamental", id: "ensino" },
              { label: "Ensino Médio", id: "ensino" },
              { label: "Cursos Preparatórios", id: "cursos" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-2 py-2.5 text-gray-700 hover:text-green-700 font-medium text-sm rounded-lg hover:bg-green-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3">
              <a
                href={waLink(
                  "Olá! Gostaria de informações sobre matrícula no Centro Educacional Pinheiros."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                Matricule-se via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gray-900"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/85 via-green-950/75 to-green-950/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 flex flex-col items-center">
        <div className="max-w-3xl flex flex-col items-center text-center">
          <div className="flex justify-center mb-8">
            <img
              src={logoImg}
              alt="Centro Educacional Pinheiros"
              className="h-36 sm:h-48 md:h-56 lg:h-60 w-auto object-contain drop-shadow-[0_4px_24px_rgba(255,255,255,0.2)] drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
            />
          </div>

          <h1 className="sr-only">Centro Educacional Pinheiros</h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-sans max-w-xl mx-auto">
            Formando cidadãos críticos, éticos e preparados para transformar a
            sociedade há mais de três décadas. Da Educação Infantil ao Ensino
            Médio, com cursos preparatórios exclusivos.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waLink(
                "Olá! Gostaria de informações sobre matrícula no Centro Educacional Pinheiros."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Faça sua Matrícula
            </a>
            <a
              href={waLink(
                "Olá! Gostaria de agendar uma visita ao Centro Educacional Pinheiros."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl transition-all"
            >
              Agendar Visita
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
        Role
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const segments = [
    { label: "ED. INFANTIL", href: "#ensino" },
    { label: "ENS. FUNDAMENTAL I E II", href: "#ensino" },
    { label: "ENS. MÉDIO", href: "#ensino" },
    { label: "CURSOS EXTRAS", href: "#cursos" },
    { label: "PREPARATÓRIO", href: "#cursos" },
  ];

  return (
    <section className="bg-green-700 border-y border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y-0 md:divide-x divide-green-600 gap-y-4 md:gap-y-0">
          {segments.map((seg, idx) => (
            <a
              key={seg.label}
              href={seg.href}
              className={`flex items-center justify-center text-center px-3 lg:px-4 py-2 transition-all hover:bg-green-800/40 rounded-xl group ${idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
            >
              <span className="font-heading font-black text-white text-sm sm:text-base lg:text-lg tracking-wider transition-all duration-200 group-hover:scale-105 group-hover:text-green-200">
                {seg.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sobre ────────────────────────────────────────────────────────────────────

const sobreCarouselImages = [
  { src: carousel1, alt: "Espaço do Centro Educacional Pinheiros" },
  { src: carousel2, alt: "Área de lazer do Centro Educacional Pinheiros" },
  { src: carousel3, alt: "Quadra esportiva do Centro Educacional Pinheiros" },
  { src: carousel4, alt: "Estrutura do Centro Educacional Pinheiros" },
  { src: carousel5, alt: "Campo esportivo do Centro Educacional Pinheiros" },
];

function SobreCarousel() {
  const [current, setCurrent] = useState(0);
  const total = sobreCarouselImages.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    setCurrent((idx + total) % total);
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCurrent((c) => (c + 1) % total), 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-green-100 shadow-2xl">
      {sobreCarouselImages.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: idx === current ? 1 : 0 }}
        />
      ))}

      {/* Prev arrow */}
      <button
        onClick={() => { goTo(current - 1); resetTimer(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all z-10"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next arrow */}
      <button
        onClick={() => { goTo(current + 1); resetTimer(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all z-10"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {sobreCarouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { goTo(idx); resetTimer(); }}
            className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            aria-label={`Ir para foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image / Carousel side */}
          <div className="relative order-2 lg:order-1">
            <SobreCarousel />
            {/* Floating accent */}
            <div className="absolute -bottom-5 -right-5 bg-amber-600 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-center">
              <img
                src={logoImg}
                alt="Colégio Pinheiros - Desde 1993"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-green-100 rounded-2xl -z-10" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="text-green-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              Nossa História
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight mb-6">
              30 anos formando{" "}
              <span className="text-green-700">cidadãos</span>
              <br />e transformando vidas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
              Fundado em 1993, o Centro Educacional Pinheiros construiu ao longo
              de mais de três décadas uma trajetória marcada pela excelência
              acadêmica e pelo compromisso com a formação humana integral.
              Localizado em Jardim Paraíso, Nova Iguaçu - RJ, atendemos famílias
              da região com dedicação, responsabilidade e amor pela educação.
            </p>

            <div className="space-y-6">
              {[
                {
                  emoji: "🎯",
                  title: "Missão",
                  text: "Proporcionar educação de qualidade que forme cidadãos críticos, éticos e preparados para transformar a sociedade.",
                },
                {
                  emoji: "🔭",
                  title: "Visão",
                  text: "Ser referência em educação básica, reconhecida pela excelência acadêmica e formação humana integral.",
                },
                {
                  emoji: "⭐",
                  title: "Valores",
                  text: "Ética, respeito, responsabilidade, inovação, cooperação e compromisso com o aprendizado contínuo.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0 mt-0.5">
                    {item.emoji}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Ensino ───────────────────────────────────────────────────────────────────

function Ensino() {
  const [activeTab, setActiveTab] = useState(0);

  const segments = [
    {
      label: "Educação Infantil",
      emoji: "🎨",
      image: ensinoInfantilImg,
      alt: "Crianças da Educação Infantil do Centro Educacional Pinheiros",
      description:
        "A Educação Infantil é o alicerce de toda a jornada acadêmica. Estimulamos o desenvolvimento cognitivo, emocional e social das crianças em um ambiente seguro, acolhedor e repleto de estímulos adequados a cada fase do desenvolvimento.",
      highlights: [
        "Ambiente acolhedor e seguro",
        "Atividades lúdicas e pedagógicas integradas",
        "Desenvolvimento socioemocional",
        "Turmas com número reduzido de alunos",
        "Professoras especializadas e dedicadas",
      ],
      waMsg:
        "Olá! Tenho interesse em informações sobre a Educação Infantil no Centro Educacional Pinheiros.",
    },
    {
      label: "Ensino Fundamental",
      emoji: "📚",
      image: ensinoFundamentalImg,
      alt: "Alunos do Ensino Fundamental em atividade prática no laboratório",
      description:
        "No Ensino Fundamental, consolidamos o aprendizado com metodologias ativas e conteúdo alinhado à Base Nacional Curricular Comum (BNCC). Valorizamos o raciocínio crítico, a criatividade e a autonomia dos alunos em cada etapa.",
      highlights: [
        "Currículo 100% alinhado à BNCC",
        "Metodologias ativas de ensino",
        "Plataforma SAE Digital integrada",
        "Acompanhamento individual dos alunos",
        "Atividades interdisciplinares e projetos",
      ],
      waMsg:
        "Olá! Tenho interesse em informações sobre o Ensino Fundamental no Centro Educacional Pinheiros.",
    },
    {
      label: "Ensino Médio",
      emoji: "🎓",
      image:
        "https://images.unsplash.com/photo-1514369118554-e20d93546b30?w=700&h=500&fit=crop&auto=format",
      alt: "Estudante do Ensino Médio estudando",
      description:
        "O Ensino Médio do Centro Educacional Pinheiros prepara os alunos de forma sólida para o ENEM, vestibulares e concursos. Com professores altamente qualificados e material pedagógico de excelência, garantimos alta taxa de aprovação.",
      highlights: [
        "Preparação intensiva para o ENEM",
        "Alta taxa de aprovação em vestibulares",
        "Material SAE Digital exclusivo",
        "Plantão de dúvidas semanal",
        "Simulados regulares com gabarito",
      ],
      waMsg:
        "Olá! Tenho interesse em informações sobre o Ensino Médio no Centro Educacional Pinheiros.",
    },
  ];

  const active = segments[activeTab];

  return (
    <section id="ensino" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-green-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            Segmentos de Ensino
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900">
            Uma jornada completa do{" "}
            <span className="text-green-700">início ao fim</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-[15px]">
            Oferecemos educação de excelência em todos os segmentos, com
            metodologias adaptadas a cada faixa etária.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {segments.map((seg, i) => (
            <button
              key={seg.label}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${activeTab === i
                ? "bg-green-700 text-white shadow-md scale-105"
                : "bg-white text-gray-600 hover:text-green-700 hover:bg-green-50 border border-gray-200 hover:border-green-200"
                }`}
            >
              <span>{seg.emoji}</span>
              {seg.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-green-100">
            <img
              src={active.image}
              alt={active.alt}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          <div>
            <div className="text-5xl mb-5">{active.emoji}</div>
            <h3 className="text-2xl font-heading font-black text-gray-900 mb-4">
              {active.label}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
              {active.description}
            </p>
            <ul className="space-y-3 mb-8">
              {active.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(active.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Saiba mais sobre {active.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Cursos Preparatórios ─────────────────────────────────────────────────────

function CursosPrep() {
  const cursos = [
    {
      Icon: BookOpen,
      tagColor: "bg-blue-100 text-blue-700",
      tag: "Intelectual",
      title: "Preparatório P+",
      subtitle: "Concursos Públicos, Militares e Vestibulares",
      description:
        "Foco total no edital. Professores especialistas em cada área, material pedagógico exclusivo, redação técnica e plantão de dúvidas permanente para maximizar sua aprovação.",
      highlights: [
        "Foco total no edital",
        "Professores especialistas",
        "Material exclusivo P+",
        "Redação e plantão de dúvidas",
      ],
      image:
        "https://images.unsplash.com/photo-1758612898788-38a249839c1d?w=600&h=380&fit=crop&auto=format",
      waMsg:
        "Olá! Tenho interesse no Preparatório P+ do Centro Educacional Pinheiros. Gostaria de mais informações sobre valores e turmas.",
    },
    {
      Icon: Dumbbell,
      tagColor: "bg-amber-100 text-amber-700",
      tag: "Físico",
      title: "Preparatório TAF",
      subtitle: "Teste de Aptidão Física",
      description:
        "Treinamento físico especializado para concursos militares e policiais: PMERJ, ESA, EsPCEx e Bombeiros. Com avaliação inicial, periodização profissional e simulados práticos reais.",
      highlights: [
        "PMERJ · ESA · EsPCEx · Bombeiros",
        "Avaliação física inicial",
        "Periodização profissional",
        "Simulados práticos reais",
      ],
      image: tafImg,
      imagePosition: "center 55%",
      waMsg:
        "Olá! Tenho interesse no Preparatório TAF do Centro Educacional Pinheiros. Gostaria de mais informações sobre valores e turmas.",
    },
  ];

  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            Exclusivo do Pinheiros
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900">
            Cursos <span className="text-green-700">Preparatórios</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-[15px]">
            Metodologia especializada para quem busca aprovação em concursos
            militares, públicos e vestibulares. Resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100 relative">
                <img
                  src={curso.image}
                  alt={curso.title}
                  style={{ objectPosition: curso.imagePosition || "center" }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${curso.tagColor} mb-4`}
                >
                  <curso.Icon className="w-3.5 h-3.5" />
                  {curso.tag}
                </span>

                <h3 className="text-xl font-heading font-black text-gray-900 mb-1">
                  {curso.title}
                </h3>
                <p className="text-green-700 font-semibold text-sm mb-4">
                  {curso.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {curso.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {curso.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(curso.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Quero me inscrever
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SAE Digital Strip ────────────────────────────────────────────────────────

function SAEDigital() {
  return (
    <section className="py-16 bg-green-50 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
            <img src={saeLogo} alt="SAE Digital" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-heading font-black text-gray-900 mb-2">
              <span style={{ color: "#1c9beb" }}>SAE</span>{" "}
              <span style={{ color: "#741e86" }}>Digital</span>
            </h3>
            <p className="text-gray-600 max-w-2xl text-[15px] leading-relaxed">
              Material pedagógico de ponta com plataforma tecnológica integrada
              para alunos e professores. Portal do Aluno e Portal do Professor
              disponíveis 24h, modernizando o aprendizado e facilitando o
              acompanhamento familiar.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3.5">
            <a
              href="https://pinheiros.alunos.digital/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group portal-btn-float-1 relative overflow-hidden text-center px-6 py-3.5 bg-white rounded-2xl border-2 border-green-200/90 shadow-sm hover:border-green-500 hover:shadow-xl hover:shadow-green-700/15 transition-all duration-300 cursor-pointer block hover:-translate-y-1.5 active:scale-95"
            >
              <div className="portal-shimmer" />
              <div className="text-xs text-gray-500 font-medium mb-1 group-hover:text-green-800 transition-colors">
                Portal do Aluno
              </div>
              <div className="flex items-center justify-center gap-1.5 text-green-700 font-bold text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponível</span>
                <ArrowRight className="w-3.5 h-3.5 text-green-600 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
            <a
              href="https://pinheiros.professores.digital/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group portal-btn-float-2 relative overflow-hidden text-center px-6 py-3.5 bg-white rounded-2xl border-2 border-green-200/90 shadow-sm hover:border-green-500 hover:shadow-xl hover:shadow-green-700/15 transition-all duration-300 cursor-pointer block hover:-translate-y-1.5 active:scale-95"
            >
              <div className="portal-shimmer" />
              <div className="text-xs text-gray-500 font-medium mb-1 group-hover:text-green-800 transition-colors">
                Portal do Professor
              </div>
              <div className="flex items-center justify-center gap-1.5 text-green-700 font-bold text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponível</span>
                <ArrowRight className="w-3.5 h-3.5 text-green-600 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Diferenciais ─────────────────────────────────────────────────────────────

function Diferenciais() {
  const items = [
    {
      Icon: Users,
      title: "Corpo Docente Qualificado",
      text: "Equipe de professores e coordenadores altamente experientes, especializados em cada segmento de ensino e comprometidos com o aprendizado.",
    },
    {
      Icon: Shield,
      title: "Ambiente Seguro e Acolhedor",
      text: "Espaço projetado para o bem-estar dos alunos, com infraestrutura completa adaptada a cada faixa etária e foco na segurança.",
    },
    {
      Icon: Award,
      title: "Alta Taxa de Aprovação",
      text: "Excelentes resultados em vestibulares, ENEM e concursos públicos e militares — fruto de nossa metodologia diferenciada.",
    },
    {
      Icon: GraduationCap,
      title: "Formação Humana Integral",
      text: "Além do conteúdo acadêmico, formamos pessoas éticas, responsáveis e preparadas para os desafios do mundo moderno.",
    },
  ];

  return (
    <section className="py-24 bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            Por que nos escolher
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-all group"
            >
              <div className="w-12 h-12 bg-amber-500/25 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/35 transition-colors">
                <item.Icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-green-200 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contato ──────────────────────────────────────────────────────────────────

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    segmento: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const seg = form.segmento ? `Interesse: ${form.segmento}. ` : "";
    const msg = `Olá! Me chamo ${form.nome}. ${seg}${form.mensagem || "Gostaria de mais informações sobre o Centro Educacional Pinheiros."} E-mail: ${form.email || "não informado"}. Telefone: ${form.telefone || "não informado"}.`;
    window.open(waLink(msg), "_blank");
  };

  const infos = [
    {
      Icon: Phone,
      label: "WhatsApp / Telefone",
      value: "(21) 97168-1314",
      href: waLink(
        "Olá! Gostaria de mais informações sobre o Centro Educacional Pinheiros."
      ),
    },
    {
      Icon: Mail,
      label: "E-mail",
      value: "pinheirosonline@gmail.com",
      href: "mailto:pinheirosonline@gmail.com",
    },
    {
      Icon: MapPin,
      label: "Endereço",
      value: "Rua Caetano Luís Muze, 110\nJardim Paraíso, Nova Iguaçu - RJ\nCEP 26297-021",
      href: null,
    },
    {
      Icon: Clock,
      label: "Horário de Atendimento",
      value: "Segunda a Sexta-feira\n07:00 às 16:00",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            Fale Conosco
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900">
            Entre em <span className="text-green-700">Contato</span>
          </h2>
          <p className="text-gray-500 mt-4 text-[15px]">
            Estamos prontos para responder todas as suas dúvidas e agendar sua
            visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-5">
                {infos.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-semibold hover:text-green-700 transition-colors whitespace-pre-line text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold whitespace-pre-line text-sm">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">
                Redes Sociais
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/pinheirosonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-700 hover:border-green-200 transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @pinheirosonline
                </a>
                <a
                  href="https://facebook.com/pinheiros.escola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-700 hover:border-green-200 transition-all shadow-sm"
                >
                  <Facebook className="w-4 h-4" />
                  pinheiros.escola
                </a>
                <a
                  href="https://www.youtube.com/@centroeducacionalpinheiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-700 hover:border-green-200 transition-all shadow-sm"
                >
                  <Youtube className="w-4 h-4" />
                  @centroeducacionalpinheiros
                </a>
                <a
                  href="https://www.tiktok.com/@pinheiros.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-700 hover:border-green-200 transition-all shadow-sm"
                >
                  <TikTokIcon className="w-4 h-4" />
                  @pinheiros.online
                </a>
              </div>
            </div>

            {/* WhatsApp card */}
            <div className="bg-green-700 rounded-2xl p-7 text-white">
              <h4 className="font-heading font-bold text-lg mb-2">
                Fale direto pelo WhatsApp
              </h4>
              <p className="text-green-200 text-sm mb-5 leading-relaxed">
                A forma mais rápida de tirar dúvidas e garantir a vaga do seu
                filho.
              </p>
              <a
                href={waLink(
                  "Olá! Gostaria de informações sobre matrículas no Centro Educacional Pinheiros."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                (21) 97168-1314
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-7">
              Envie sua mensagem
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, nome: e.target.value }))
                  }
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={form.telefone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, telefone: e.target.value }))
                    }
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Interesse
                </label>
                <select
                  value={form.segmento}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, segmento: e.target.value }))
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
                >
                  <option value="">Selecione um segmento...</option>
                  <option>Educação Infantil</option>
                  <option>Ensino Fundamental</option>
                  <option>Ensino Médio</option>
                  <option>Preparatório P+</option>
                  <option>Preparatório TAF</option>
                  <option>Informações gerais</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, mensagem: e.target.value }))
                  }
                  placeholder="Olá! Gostaria de saber mais sobre..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-sm hover:shadow-md"
              >
                <Phone className="w-4 h-4" />
                Enviar via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="Centro Educacional Pinheiros"
                className="h-10 md:h-11 w-auto object-contain"
              />
              <div className="flex items-center">
                <span
                  style={{ color: "#3b82f6" }}
                  className="font-heading font-black text-2xl md:text-3xl tracking-wider select-none leading-none"
                >
                  C.E.P
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Mais de 30 anos de tradição, excelência acadêmica e compromisso
              com a formação humana integral em Nova Iguaçu - RJ.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/pinheirosonline"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/pinheiros.escola"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@centroeducacionalpinheiros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@pinheiros.online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                title="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ensino links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Ensino</h4>
            <ul className="space-y-3">
              {[
                "Educação Infantil",
                "Ensino Fundamental",
                "Ensino Médio",
                "Preparatório P+",
                "Preparatório TAF",
              ].map((label) => (
                <li key={label}>
                  <span className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors text-sm">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Contato</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                (21) 97168-1314
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                pinheirosonline@gmail.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>
                  Rua Caetano Luís Muze, 110
                  <br />
                  Jardim Paraíso, Nova Iguaçu - RJ
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                Seg. a Sex. · 07:00 às 16:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Centro Educacional Pinheiros. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Fundado em 1993 · Nova Iguaçu - RJ
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Sobre />
        <Ensino />
        <CursosPrep />
        <SAEDigital />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
