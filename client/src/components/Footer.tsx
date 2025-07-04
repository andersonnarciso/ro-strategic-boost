
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="font-bold text-primary">R&O</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    R&O Consultoria Estratégica
                  </h3>
                  <p className="text-sm text-white/70">Metodologia proprietária</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed max-w-md mx-auto lg:mx-0">
                Especialistas em transformar negócios de alimentos e bebidas através de nossa 
                metodologia proprietária R&O 360. Resultados comprovados em 90 dias.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-lg mb-6">Navegação</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-white/80 hover:text-white transition-colors mx-auto lg:mx-0"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('quem-somos')}
                  className="block text-white/80 hover:text-white transition-colors mx-auto lg:mx-0"
                >
                  Quem somos
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="block text-white/80 hover:text-white transition-colors mx-auto lg:mx-0"
                >
                  Nossos serviços
                </button>
                <button 
                  onClick={() => scrollToSection('metodo')}
                  className="block text-white/80 hover:text-white transition-colors mx-auto lg:mx-0"
                >
                  Método R&O 360
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block text-white/80 hover:text-white transition-colors mx-auto lg:mx-0"
                >
                  Contato
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-lg mb-6">Nossos serviços</h4>
              <div className="space-y-3 text-white/80">
                <p>Diagnóstico operacional</p>
                <p>Análise de processos</p>
                <p>Otimização de estoque</p>
                <p>Consultoria estratégica</p>
                <p>Cliente oculto</p>
                <p>Marketing digital</p>
                <p>Abertura de negócios A&B</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container-custom py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/70 text-center lg:text-left">
                <p>© {currentYear} R&O Consultoria Estratégica. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                  <button className="hover:text-white transition-colors">
                    Política de privacidade
                  </button>
                  <span className="hidden md:inline">|</span>
                  <button className="hover:text-white transition-colors">
                    Termos de uso
                  </button>
                </div>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-accent hover:bg-accent/90 text-primary p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>

            {/* Developer Credits - Centered */}
            <div className="text-center mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/60">
                Desenvolvido por{' '}
                <a 
                  href="https://andersonnarciso.dev.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Anderson Narciso
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
