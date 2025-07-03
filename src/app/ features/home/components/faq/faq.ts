import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}


@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  // Array de preguntas frecuentes con estado inicial
  faqs: FaqItem[] = [
    {
      question: '¿Qué tipos de impresión ofrecen?',
      answer: 'Ofrecemos impresión digital, offset, gran formato, serigrafía y acabados especiales como relieve, troquelado y foil stamping. Contamos con tecnología de última generación para cada tipo de trabajo.',
      isOpen: false
    },
    {
      question: '¿Cuál es el tiempo de producción promedio?',
      answer: 'Los tiempos varían según el proyecto: tarjetas de presentación (24-48h), vallas publicitarias (48-72h), material corporativo (3-5 días). Para proyectos urgentes ofrecemos servicio express con un costo adicional.',
      isOpen: false
    },
    {
      question: '¿Tienen servicio de diseño gráfico?',
      answer: 'Sí, nuestro equipo de diseñadores profesionales puede crear diseños desde cero o adaptar tus materiales existentes. Ofrecemos 2 revisiones gratuitas en cada proyecto para garantizar tu satisfacción.',
      isOpen: false
    },
    {
      question: '¿Qué formatos de archivo aceptan para imprimir?',
      answer: 'Aceptamos PDF (preferido), AI, EPS, PSD y TIFF. Los archivos deben incluir sangrado de 3mm y marcas de corte. Recomendamos enviar diseños en modo color CMYK con 300 DPI de resolución mínima.',
      isOpen: false
    },
    {
      question: '¿Ofrecen envíos a domicilio?',
      answer: 'Sí, realizamos envíos a toda la ciudad con diferentes opciones: estándar (24-48h), express (mismo día) y especial para materiales de gran formato. También ofrecemos servicio de instalación profesional.',
      isOpen: false
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos transferencias bancarias, tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y efectivo. Para clientes corporativos ofrecemos facturación y planes de pago especiales.',
      isOpen: false
    }
  ];

  // Control para mantener solo un FAQ abierto a la vez
  singleOpenMode: boolean = true;

  /**
   * Alterna el estado de apertura/cierre de un item del FAQ
   * @param index Índice del item a modificar
   */
  toggleFaq(index: number): void {
    if (this.singleOpenMode) {
      // Cierra todos los demás items primero
      this.faqs.forEach((faq, i) => {
        if (i !== index) faq.isOpen = false;
      });
    }
    
    // Alterna el estado del item clickeado
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  /**
   * Abre un item específico y cierra los demás
   * @param index Índice del item a abrir
   */
  openFaq(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.isOpen = i === index;
    });
  }

  /**
   * Cierra todos los items del FAQ
   */
  closeAllFaqs(): void {
    this.faqs.forEach(faq => faq.isOpen = false);
  }

  /**
   * Abre todos los items del FAQ (útil para móviles)
   */
  openAllFaqs(): void {
    this.faqs.forEach(faq => faq.isOpen = true);
  }

  /**
   * Cambia entre modo de un solo item abierto o múltiples
   */
  toggleSingleOpenMode(): void {
    this.singleOpenMode = !this.singleOpenMode;
    if (this.singleOpenMode && this.faqs.filter(f => f.isOpen).length > 1) {
      this.closeAllFaqs();
    }
  }
}
