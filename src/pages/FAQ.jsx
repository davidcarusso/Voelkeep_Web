import { useState } from 'react';
import { Icons, Icon } from '@/components/Icons';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { generateWhatsAppUrl } from '@/config';
import { trackWhatsAppConversion } from '@/hooks/useGoogleTagManager';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import '../styles/components/faq.css';

const FAQ = () => {
  useScrollReveal();
  usePageViewTracking();
  const [openIndex, setOpenIndex] = useState(null);

  const handleWhatsAppClick = async (e) => {
    e.preventDefault();
    const whatsappUrl = generateWhatsAppUrl('general');
    await trackWhatsAppConversion(whatsappUrl, 100.0);
  };

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: Icons.clock,
      question: '¿Cuál es el horario de atención?',
      answer: 'Nuestro centro de estética atiende de lunes a viernes de 9:00 a 20:00 hs y sábados de 9:00 a 14:00 hs. Los domingos permanecemos cerrados. Te recomendamos agendar tu turno con anticipación para asegurar el horario que mejor se adapte a tus necesidades.'
    },
    {
      icon: Icons.target,
      question: '¿Puedo asistir a mi turno con un acompañante?',
      answer: 'Sí, podés asistir con un acompañante. Pueden acompañarte tanto hombres como mujeres, y preferentemente una sola persona por vez para mantener un ambiente tranquilo y privado durante el tratamiento. Tu acompañante puede aguardar en nuestra sala de espera.'
    },
    {
      icon: Icons.calendar,
      question: '¿Cómo puedo agendar un turno?',
      answer: 'Podés agendar tu turno a través de WhatsApp haciendo clic en cualquiera de los botones de consulta de nuestra web. Te responderemos de inmediato para confirmar disponibilidad y acordar día y horario. También podés llamarnos directamente para coordinar.'
    },
    {
      icon: Icons.creditCard,
      question: '¿Qué formas de pago aceptan?',
      answer: 'Aceptamos efectivo, transferencia bancaria y todos los medios de pago electrónicos (débito, crédito, MercadoPago). Algunos tratamientos pueden abonarse en cuotas. Consultá las opciones de financiación disponibles al momento de agendar tu turno.'
    },
    {
      icon: Icons.refresh,
      question: '¿Puedo cancelar o reprogramar mi turno?',
      answer: 'Sí, podés cancelar o reprogramar tu turno con al menos 24 horas de anticipación. Te pedimos que nos avises lo antes posible por WhatsApp o teléfono para poder ofrecerle ese horario a otra persona. Las cancelaciones sin aviso previo pueden afectar futuros turnos.'
    },
    {
      icon: Icons.shield,
      question: '¿Los tratamientos son seguros? ¿Tienen efectos secundarios?',
      answer: 'Todos nuestros tratamientos son seguros y están realizados por profesionales capacitadas con productos de alta calidad. Antes de cada tratamiento, hacemos una evaluación de tu piel y te informamos sobre posibles reacciones temporales (como enrojecimiento leve post-tratamiento). Siempre trabajamos bajo protocolos de seguridad e higiene.'
    },
    {
      icon: Icons.user,
      question: '¿Necesito preparación previa para los tratamientos?',
      answer: 'Depende del tratamiento. Para algunos procedimientos como peelings o microneedling, te daremos indicaciones específicas (evitar exposición solar, suspender ciertos productos). Al agendar tu turno, te informaremos si tu tratamiento requiere alguna preparación especial.'
    },
    {
      icon: Icons.star,
      question: '¿Cuándo voy a ver resultados?',
      answer: 'El tiempo para ver resultados varía según el tratamiento. Algunos como la limpieza profunda o dermaplaning ofrecen resultados inmediatos, mientras que otros como microneedling o radiofrecuencia requieren varias sesiones para ver mejoras progresivas. Durante la consulta, te explicaremos qué esperar de cada tratamiento.'
    },
    {
      icon: Icons.heartPulse,
      question: '¿Hay tratamientos no aptos para embarazadas?',
      answer: 'Sí, algunos tratamientos faciales y corporales no están recomendados durante el embarazo o lactancia por precaución. Si estás embarazada o amamantando, informanos antes de agendar para que podamos recomendarte opciones seguras y adecuadas para tu etapa.'
    },
    {
      icon: Icons.personalizacion,
      question: '¿Ofrecen planes personalizados?',
      answer: 'Sí! Ofrecemos planes de tratamiento personalizados según tus objetivos y tipo de piel. Podés agendar un asesoramiento donde evaluamos tu piel y diseñamos un plan a medida que combine diferentes tratamientos para resultados óptimos. Consultá por disponibilidad y valor.'
    },
    {
      icon: Icons.gift,
      question: '¿Tienen gift cards o bonos de regalo?',
      answer: 'Sí, contamos con gift cards que podés regalar para cualquier tratamiento o por un monto específico. Son el regalo perfecto para cumpleaños, aniversarios o cualquier ocasión especial. Consultá por WhatsApp para adquirir tu gift card.'
    },
    {
      icon: Icons.verano,
      question: '¿Puedo realizarme tratamientos en verano?',
      answer: 'Algunos tratamientos como peelings químicos profundos no se recomiendan en verano por la exposición solar. Sin embargo, ofrecemos alternativas como Gloss Peel o tratamientos corporales que son ideales para cualquier época del año. Te asesoramos sobre cuál es el mejor momento para cada tratamiento según tus planes.'
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content scroll-reveal">
            <Icon icon={Icons.helpCircle} size={64} className="hero-icon" />
            <h1>Preguntas Frecuentes</h1>
            <p>Todo lo que necesitás saber sobre nuestros tratamientos y servicios</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-intro scroll-reveal">
            <p>
              Respondemos las consultas más comunes. Si no encontrás la respuesta 
              que buscás, no dudes en contactarnos por WhatsApp.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="question-header">
                    <Icon icon={faq.icon} size={24} className="question-icon" />
                    <h3>{faq.question}</h3>
                  </div>
                  <Icon 
                    icon={Icons.chevronDown} 
                    size={24} 
                    className={`toggle-icon ${openIndex === index ? 'rotated' : ''}`}
                  />
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <div className="container">
          <div className="cta-content scroll-reveal">
            <Icon icon={Icons.messageCircle} size={48} />
            <h2>¿Todavía tenés dudas?</h2>
            <p>Estamos para ayudarte. Consultanos por WhatsApp y te respondemos al instante.</p>
            <a 
              href={generateWhatsAppUrl('general')}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              <Icon icon={Icons.phone} size={20} />
              Hacer una consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
