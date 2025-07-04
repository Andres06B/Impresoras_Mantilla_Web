import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-botones-wc',
  imports: [CommonModule, FormsModule],
  templateUrl: './botones-wc.html',
  styleUrl: './botones-wc.css'
})
export class BotonesWc implements OnInit {
  @Input() position: 'right' | 'left' = 'right';
  @Input() bottom: '4' | '8' | '12' = '8';
  @Input() showText: boolean = false;
  @Input() phoneNumber: string = '573014374606';
  @Input() defaultMessage: string = 'Hola, estoy interesado en sus servicios de impresión';
  @Input() companyName: string = 'Impresoras Mantilla';

  isChatOpen: boolean = false;
  userMessage: string = '';
  messages: { text: string; isUser: boolean; time?: Date }[] = [];
  whatsappLink: string = '';

  ngOnInit() {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    
    if (this.isChatOpen) {
      this.showWelcomeMessage();
    }
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    
    if (this.isChatOpen && this.messages.length === 0) {
      this.showWelcomeMessage();
    }
  }

  private showWelcomeMessage() {
    this.addBotMessage(`¡Hola! Soy el asistente de ${this.companyName}.`);
    this.addBotMessage('¿En qué puedo ayudarte hoy? Puedes preguntarme sobre:');
    this.addBotMessage('- Vallas publicitarias\n- Tarjetas de presentación\n- Folletos\n- Precios\n- Contacto');
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    const userText = this.userMessage;
    this.addUserMessage(userText);
    this.userMessage = '';
    
    // Respuesta inmediata sin delay
    this.processUserMessage(userText);
  }

  addUserMessage(text: string) {
    this.messages.push({ 
      text, 
      isUser: true,
      time: new Date()
    });
    this.scrollToBottom();
  }

  addBotMessage(text: string) {
    this.messages.push({ 
      text, 
      isUser: false,
      time: new Date()
    });
    this.scrollToBottom();
  }

  private scrollToBottom() {
    setTimeout(() => {
      const chatContainer = document.querySelector('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 50);
  }

  private processUserMessage(message: string) {
    const lowerMessage = message.toLowerCase();
    
    // Respuestas rápidas y concretas
    if (this.containsAny(lowerMessage, ['hola', 'buenos días', 'buenas tardes'])) {
      this.addBotMessage('¡Hola! ¿En qué necesitas ayuda?');
    }
    else if (this.containsAny(lowerMessage, ['valla', 'publicidad', 'publicitaria'])) {
      this.addBotMessage('Ofrecemos vallas publicitarias de alta calidad. ¿Te interesa para interior o exterior?');
    }
    else if (this.containsAny(lowerMessage, ['interior'])) {
      this.addBotMessage('Las vallas para interior son ideales para eventos y espacios cerrados. ¿Qué dimensiones necesitas o tienes alguna idea en mente?');
    }
    else if (this.containsAny(lowerMessage, ['exterior'])) {
      this.addBotMessage('Las vallas para exterior están hechas con materiales resistentes al clima. ¿Dónde planeas instalarla o qué tamaño buscas?');
    }
    else if (this.containsAny(lowerMessage, ['tarjeta', 'presentación', 'visita'])) {
      this.addBotMessage('Tenemos tarjetas de presentación desde 100 unidades. ¿Qué tipo de acabado necesitas?');
    }
    else if (this.containsAny(lowerMessage, ['folleto', 'catálogo', 'volante'])) {
      this.addBotMessage('Folletos desde 50 unidades. ¿Tamaño estándar o personalizado?');
    }
    else if (this.containsAny(lowerMessage, ['precio', 'costo', 'cotización', 'cuánto'])) {
      this.addBotMessage('Los precios varían según cantidad y materiales. ¿Qué producto necesitas?');
    }
    else if (this.containsAny(lowerMessage, ['contacto', 'ubicación', 'dirección', 'teléfono'])) {
      this.addBotMessage(`Puedes contactarnos al WhatsApp: +${this.phoneNumber} o visitarnos en nuestro local.`);
    }
    else if (this.containsAny(lowerMessage, ['gracias', 'agradezco'])) {
      this.addBotMessage('¡De nada! ¿Necesitas algo más?');
    }
    else if (this.containsAny(lowerMessage, ['whatsapp', 'hablar', 'asesor'])) {
      this.addBotMessage(`Perfecto, contáctanos por WhatsApp: +${this.phoneNumber}`);
      setTimeout(() => window.open(this.whatsappLink, '_blank'), 500);
    }
    else {
      this.addBotMessage('No entendí tu consulta. ¿Puedes ser más específico?');
      this.addBotMessage('Pregúntame sobre: productos, precios o contacto.');
    }
  }

  // Función auxiliar para simplificar las comparaciones
  private containsAny(text: string, words: string[]): boolean {
    return words.some(word => text.includes(word));
  }
}