import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Database, Menu, X } from 'lucide-react';

export default function Portafolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeExperience, setActiveExperience] = useState('experience');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const roles = ['Desarrolladora', 'Data Analytics', 'UX/UI Designer'];
  
  const skills = [
    {
      title: 'Developer',
      description: 'Creación de sitios web con HTML, CSS, JavaScript. Sitios web profesionales con TypeScript, React, Node.js y mucha creatividad.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Next.js','Django', 'GitHub', 'Flutter', 'Mongodb', 'Firebase', 'Git'],
      icon: Code,
      color: 'from-[#10214b] to-[#1a3a6e]'
    },
    {
      title: 'Design',
      description: 'Diseñadora web con Figma y Sketch, creando diseños en movimiento con After Effects, creatividad y diseño en su máxima expresión.',
      tools: ['Figma', 'Canva', 'Adobe XD', 'After Effects', 'Sketch'],
      icon: Palette,
      color: 'from-[#d7bd88] to-[#c9a665]'
    },
    {
      title: 'Data Analytics',
      description: 'Análisis de datos con Python, visualización con Tableau, transformando datos en insights accionables.',
      tools: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel'],
      icon: Database,
      color: 'from-[#d0c3ba] to-[#b8a89e]'
    }
  ];

  const experiences = [
    {
      type: 'experience',
      title: 'Asesora Comercial',
      company: 'Viamatica',
      year: '2025',
      description: 'Lidero el desarrollo de aplicaciones web modernas utilizando React, TypeScript y Node.js. Implemento arquitecturas escalables y optimizo el rendimiento de aplicaciones de alto tráfico.'
    },
    {
      type: 'experience',
      title: 'Asistente de sistemas/soporte usuario',
      company: 'Grupo Ravcorp',
      year: '2024-2025',
      description: 'Lidero el desarrollo de aplicaciones web modernas utilizando React, TypeScript y Node.js. Implemento arquitecturas escalables y optimizo el rendimiento de aplicaciones de alto tráfico.'
    },
    {
      type: 'experience',
      title: 'Practicante soporte usuario',
      company: 'Totaltek',
      year: '2021',
      description: 'Diseñé interfaces intuitivas y experiencias de usuario excepcionales. Colaboré con equipos multidisciplinarios para crear productos digitales innovadores.'
    },
    {
      type: 'experience',
      title: 'Practicante soporte tecnico',
      company: 'Hospital Leon Becerra de Guayaquil',
      year: '2020',
      description: 'Desarrollé aplicaciones web completas desde cero, gestionando tanto frontend como backend. Implementé integraciones con APIs y optimicé bases de datos.'
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Ingeniería en Sistemas',
      company: 'Universidad Guayaquil - Ecuador',
      year: '2013 - 2021',
      description: 'Estudiante universitaria aprendiendo los fundamentos de programación, desarrollo web y otros temas, graduándose con honores.'
    },
    {
      type: 'education',
      title: 'Desarrollo full stack',
      company: 'Universidad hemisferos',
      year: '2022',
      description: 'Estudiante universitaria aprendiendo los fundamentos de programación, desarrollo web y otros temas, graduándose con honores.'
    },

     {
      type: 'education',
      title: 'Ingles - B1',
      company: 'Instituto Tecnico Bolivariano',
      year: '2022',
      description: 'Estudiante universitaria aprendiendo los fundamentos de programación, desarrollo web y otros temas, graduándose con honores.'
    },
    {
      type: 'education',
      title: 'Analisid de datos / UX-UI Design',
      company: 'Platzi',
      year: '2025',
      description: 'Estudiante universitaria aprendiendo los fundamentos de programación, desarrollo web y otros temas, graduándose con honores.'
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Planificacion y experiencia de compras',
      description: 'Una aplicación React poderosa y fácil de usar diseñada para descubrir y mostrar información detallada de perfiles de GitHub.',
      image: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=800&h=600&fit=crop',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'API'],
      demoUrl: 'https://demo.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Sistema de inspeccion inmobiliario',
      description: 'Plataforma completa basada en quiz diseñada para estudiantes GATE/UGC NET para practicar preguntas de años anteriores y crear pruebas personalizadas.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://demo.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Banca movil, proceso retiro de cajero',
      description: 'Aplicación web basada en React que proporciona recomendaciones de películas basadas en diferentes criterios, como géneros y calificaciones.',
      image: 'https://images.unsplash.com/photo-1574267432644-f610a4ab9a1c?w=800&h=600&fit=crop',
      skills: ['React.js', 'API', 'HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://demo.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Metrovia ruta viva',
      description: 'Dashboard completo para gestión de tienda online con análisis de ventas, inventario y métricas de usuarios.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      skills: ['React.js', 'TypeScript', 'Tailwind', 'Chart.js'],
      demoUrl: 'https://demo.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Sitio web de portafolio personal con diseño moderno y animaciones fluidas.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      skills: ['React.js', 'Tailwind', 'Framer Motion'],
      demoUrl: 'https://demo.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, etiquetas y filtros avanzados.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://demo.com',
      repoUrl: 'https://github.com'
    }
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === currentRole) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypewriterText(
          isDeleting
            ? currentRole.substring(0, typewriterText.length - 1)
            : currentRole.substring(0, typewriterText.length + 1)
        );
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, roleIndex]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#ebe7e1] font-serif overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#d7bd88] tracking-wider">Mar Carabali</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'portafolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-widest transition-all duration-300 ${
                    activeSection === section
                      ? 'text-[#d7bd88] border-b-2 border-[#d7bd88]'
                      : 'text-white hover:text-[#d7bd88]'
                  }`}
                >
                  {section === 'home' ? 'Inicio' : section === 'about' ? 'Acerca de mí' : section === 'portafolio' ? 'Portafolio' : 'Contacto'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#d7bd88] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['home', 'about', 'portafolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                    activeSection === section
                      ? 'text-[#d7bd88] bg-[#d7bd88]/10'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {section === 'home' ? 'Inicio' : section === 'about' ? 'Acerca de mí' : section === 'portafolio' ? 'Portafolio' : 'Contacto'}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#10214b] to-[#0a1628] relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/portafolio/videos/galaxy.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-[#d7bd88] text-base sm:text-lg tracking-wider">Hola, mi nombre es</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">María Carabalí</h1>
              <div className="text-2xl sm:text-3xl md:text-4xl text-[#d7bd88] font-light h-12 md:h-16 flex items-center justify-center md:justify-start">
                Soy <span className="ml-3">{typewriterText}</span>
              </div>
            </div>
            <p className="text-[#d0c3ba] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Apasionada por crear experiencias digitales excepcionales. Combino diseño, desarrollo y datos para construir soluciones innovadoras que impactan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="px-6 sm:px-8 py-3 bg-[#d7bd88] text-[#10214b] font-semibold rounded-full hover:bg-[#c9a665] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ver Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 border-2 border-[#d7bd88] text-[#d7bd88] font-semibold rounded-full hover:bg-[#d7bd88] hover:text-[#10214b] transition-all duration-300"
              >
                Contáctame
              </button>
            </div>
            <div className="flex gap-6 pt-6 justify-center md:justify-start">
              <a href="#" className="text-[#d7bd88] hover:text-[#ebe7e1] transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="text-[#d7bd88] hover:text-[#ebe7e1] transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="text-[#d7bd88] hover:text-[#ebe7e1] transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          <div className="relative animate-fadeIn order-1 md:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-full aspect-square mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d7bd88] to-[#d0c3ba] rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="images/program.png"
                alt="Coding"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#d7bd88] p-4 sm:p-6 rounded-2xl shadow-xl">
                <p className="text-[#10214b] font-bold text-xl sm:text-2xl">1+</p>
                <p className="text-[#10214b] text-xs sm:text-sm">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-[#d7bd88]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#ebe7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#10214b] mb-12 sm:mb-16 text-center">
            Lo que <span className="text-[#d7bd88]">Ofrezco</span>
          </h2>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const [isExpanded, setIsExpanded] = useState(false);
              
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#10214b] to-[#1a3a6e] rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 shadow-xl overflow-hidden"
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d7bd88] opacity-10 rounded-bl-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-[#d7bd88]" />
                      <ChevronDown 
                        className={`w-6 h-6 text-[#d7bd88] transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{skill.title}</h3>
                    
                    <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[#d0c3ba] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {skill.description}
                      </p>
                      
                      <div className="space-y-3">
                        <p className="text-[#d7bd88] font-semibold text-xs sm:text-sm uppercase tracking-wider">Skills & Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-2 sm:px-3 py-1 bg-[#d7bd88]/20 text-[#d7bd88] rounded-full text-xs sm:text-sm border border-[#d7bd88]/30"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {!isExpanded && (
                      <p className="text-[#d0c3ba] text-xs sm:text-sm mt-4 opacity-70">Click para ver más</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Experience & Education */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#10214b] mb-8 sm:mb-12 text-center">
              Mi <span className="text-[#d7bd88]">Trayectoria</span>
            </h3>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <button
                onClick={() => setActiveExperience('experience')}
                className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeExperience === 'experience'
                    ? 'bg-[#10214b] text-white shadow-lg'
                    : 'bg-[#d0c3ba]/30 text-[#10214b] hover:bg-[#d0c3ba]/50'
                }`}
              >
                Experiencia
              </button>
              <button
                onClick={() => setActiveExperience('education')}
                className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeExperience === 'education'
                    ? 'bg-[#10214b] text-white shadow-lg'
                    : 'bg-[#d0c3ba]/30 text-[#10214b] hover:bg-[#d0c3ba]/50'
                }`}
              >
                Educación
              </button>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#10214b] via-[#d7bd88] to-[#d0c3ba]"></div>
              
              <div className="space-y-8 sm:space-y-12">
                {(activeExperience === 'experience' ? experiences : education).map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="inline-block w-full md:w-auto bg-gradient-to-br from-[#10214b] to-[#1a3a6e] rounded-2xl p-5 sm:p-6 shadow-lg hover:scale-105 transition-all duration-300">
                        <h4 className="text-xl sm:text-2xl font-bold text-[#d7bd88] mb-2">{item.title}</h4>
                        <p className="text-[#d0c3ba] font-semibold mb-1 text-sm sm:text-base">{item.company}</p>
                        <p className="text-white/80 text-xs sm:text-sm mb-3">{item.year}</p>
                        <p className="text-[#d0c3ba] leading-relaxed text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block relative z-10">
                      <div className="w-6 h-6 bg-[#d7bd88] rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio Section */}
      <section id="portafolio" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#10214b] to-[#1a3a6e] relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/portafolio/videos/galaxy.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Mis <span className="text-[#d7bd88]">Proyectos</span>
          </h2>
          <p className="text-[#d0c3ba] text-center mb-12 sm:mb-16 text-sm sm:text-base md:text-lg px-4">
            Una muestra de los proyectos en los que he trabajado, destacando mis habilidades y experiencia en diversas tecnologías
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10214b] to-transparent opacity-60"></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#10214b] mb-2 sm:mb-3 group-hover:text-[#d7bd88] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 4).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-[#10214b]/10 text-[#10214b] rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 bg-[#d7bd88]/20 text-[#10214b] rounded-full text-xs font-medium">
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#10214b] hover:bg-white transition-all duration-300 shadow-lg"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10214b] mb-4 sm:mb-6">
                {selectedProject.title}
              </h3>
              
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                {selectedProject.description}
              </p>
              
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xs sm:text-sm font-semibold text-[#10214b] uppercase tracking-wider mb-3 sm:mb-4">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedProject.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#10214b] to-[#1a3a6e] text-white rounded-full text-xs sm:text-sm font-medium shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-[#10214b] text-white rounded-xl font-semibold hover:bg-[#1a3a6e] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Código
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-[#d7bd88] text-[#10214b] rounded-xl font-semibold hover:bg-[#c9a665] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#ebe7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#10214b] mb-4 sm:mb-6">
              Hagamos Realidad <span className="text-[#d7bd88]">Tus Ideas</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Estoy aquí para ayudarte a construir experiencias digitales excepcionales. 
              Conversemos sobre tu próximo proyecto y cómo puedo aportar valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-[#10214b] to-[#1a3a6e] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#d7bd88]">Comunicación Global, Impacto Sin Fronteras</h3>
                <p className="text-[#d0c3ba] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Conectemos y construyamos algo extraordinario juntos. Cada proyecto es una oportunidad para crear soluciones innovadoras.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d7bd88] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#10214b]" />
                    </div>
                    <div>
                      <p className="text-[#d7bd88] font-semibold mb-1 text-sm sm:text-base">Email</p>
                      <p className="text-[#d0c3ba] text-sm sm:text-base break-all">emprproyect@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d7bd88] rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#10214b]" />
                    </div>
                    <div>
                      <p className="text-[#d7bd88] font-semibold mb-1 text-sm sm:text-base">GitHub</p>
                      <p className="text-[#d0c3ba] text-sm sm:text-base break-all">github.com/Mar-proyectos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d7bd88] rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#10214b]" />
                    </div>
                    <div>
                      <p className="text-[#d7bd88] font-semibold mb-1 text-sm sm:text-base">LinkedIn</p>
                      <p className="text-[#d0c3ba] text-sm sm:text-base break-all">maria-del-mar-carabali-castillo</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#d7bd88]/30">
                  <p className="text-[#d7bd88] font-semibold mb-4 text-sm sm:text-base">Sígueme en redes sociales</p>
                  <div className="flex gap-3 sm:gap-4">
                    {[Github, Linkedin, Mail].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d7bd88]/20 rounded-full flex items-center justify-center hover:bg-[#d7bd88] transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#d7bd88] group-hover:text-[#10214b] transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#10214b] mb-2 uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#d0c3ba] rounded-xl focus:border-[#d7bd88] focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#10214b] mb-2 uppercase tracking-wider">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de empresa"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#d0c3ba] rounded-xl focus:border-[#d7bd88] focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#10214b] mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#d0c3ba] rounded-xl focus:border-[#d7bd88] focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#10214b] mb-2 uppercase tracking-wider">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+593 99 999 9999"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#d0c3ba] rounded-xl focus:border-[#d7bd88] focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#10214b] mb-2 uppercase tracking-wider">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#d0c3ba] rounded-xl focus:border-[#d7bd88] focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#10214b] mb-2 uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#d0c3ba] rounded-xl focus:border-[#d7bd88] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#10214b] to-[#1a3a6e] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base sm:text-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#10214b] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d0c3ba] text-sm sm:text-base">
            © 2026 María Carabali
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
