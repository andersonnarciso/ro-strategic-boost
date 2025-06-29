
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to thank you page
        window.location.href = '/obrigado';
      } else {
        toast({
          title: "Erro ao enviar mensagem",
          description: result.message || "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Verifique sua conexão e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Entre em contato</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            Pronto para transformar seu negócio?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco hoje mesmo e descubra como o 
            <span className="font-semibold text-primary"> método R&O 360</span> pode 
            impulsionar seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-3xl p-8 shadow-lg h-full">
              <h3 className="font-display text-2xl font-bold text-primary mb-6 text-center">
                Solicite sua análise gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(47) 99999-9999"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu negócio e seus principais desafios..."
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information - Aligned Heights */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-rows-2 gap-6 h-full">
              {/* Top Row: Contact Info + Business Hours */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
                  <h3 className="font-display text-2xl font-bold mb-6 text-center">
                    Informações de contato
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">E-mail</h4>
                        <a 
                          href="mailto:r.oconsultoriaestrategica@gmail.com"
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          r.oconsultoriaestrategica@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Telefone</h4>
                        <a 
                          href="tel:+5547992062877"
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          +55 (47) 9 9206-2877
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <a 
                          href="https://wa.me/5547992062877?text=Olá! Gostaria de saber mais sobre a consultoria R&O 360 e solicitar minha análise gratuita."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          +55 (47) 9 9206-2877
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Business Hours + Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                    <h3 className="font-display text-lg font-bold text-primary">
                      Horário de atendimento
                    </h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground text-center">
                    <p><span className="font-medium">Segunda - Sexta:</span> 08:00 - 18:00</p>
                    <p><span className="font-medium">Sábado:</span> 08:00 - 12:00</p>
                    <p><span className="font-medium">Domingo:</span> Fechado</p>
                  </div>
                </div>

                <div className="bg-card rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                    <h3 className="font-display text-lg font-bold text-primary">
                      Atendimento
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-center">
                    Atendemos todo o Brasil através de consultoria presencial e remota, 
                    adaptando nossa metodologia às necessidades de cada cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-16">
          <div className="bg-accent/10 rounded-3xl p-8 max-w-2xl mx-auto border-2 border-accent/20">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Prefere conversar diretamente?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale conosco agora mesmo pelo WhatsApp e tire todas suas dúvidas
            </p>
            <a
              href="https://wa.me/5547992062877?text=Olá! Gostaria de saber mais sobre a consultoria R&O 360 e solicitar minha análise gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
