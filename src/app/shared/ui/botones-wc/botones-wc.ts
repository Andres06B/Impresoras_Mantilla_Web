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
  @Input() phoneNumber: string = '573014374606'; // Número de WhatsApp por defecto
  @Input() defaultMessage: string = 'Hola, estoy interesado en sus servicios de impresión';
  @Input() companyName: string = 'Impresoras Mantilla'; // Nombre de la empresa configurable

  isChatOpen: boolean = false;
  userMessage: string = '';
  messages: { text: string; isUser: boolean; time?: Date }[] = []; // Añadido campo time
  whatsappLink: string = '';

  ngOnInit() {
    // Configurar el enlace de WhatsApp
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    
    // Mensaje inicial del bot si el chat está abierto al cargar
    if (this.isChatOpen) {
      this.showWelcomeMessages();
    }
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    
    // Si se abre el chat, mostrar mensajes de bienvenida si no hay mensajes
    if (this.isChatOpen && this.messages.length === 0) {
      setTimeout(() => {
        this.showWelcomeMessages();
      }, 300);
    }
  }

  private showWelcomeMessages() {
    this.addBotMessage(`¡Hola! Soy el asistente virtual de ${this.companyName}. ¿En qué puedo ayudarte hoy?`);
    this.addBotMessage('Puedes preguntarme sobre nuestros servicios: vallas publicitarias, tarjetas premium, folletos, displays y más.');
  }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    // Agregar mensaje del usuario con marca de tiempo
    this.addUserMessage(this.userMessage);
    
    // Procesar respuesta del bot (simulado)
    setTimeout(() => {
      this.processUserMessage(this.userMessage);
    }, 500);
    
    this.userMessage = '';
  }

  addUserMessage(text: string) {
    this.messages.push({ 
      text, 
      isUser: true,
      time: new Date() // Añadir marca de tiempo
    });
    this.scrollToBottom();
  }

  addBotMessage(text: string) {
    this.messages.push({ 
      text, 
      isUser: false,
      time: new Date() // Añadir marca de tiempo
    });
    this.scrollToBottom();
  }

  private scrollToBottom() {
    setTimeout(() => {
      const chatContainer = document.querySelector('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  }

  private processUserMessage(message: string) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas tardes')) {
      this.addBotMessage('¡Hola! ¿En qué puedo ayudarte hoy?');
    } 
    else if (lowerMessage.includes('servicio') || lowerMessage.includes('producto') || lowerMessage.includes('ofrecen')) {
      this.addBotMessage('Ofrecemos servicios de impresión profesional: vallas publicitarias, tarjetas de presentación premium, folletos, displays y material promocional de alta calidad.');
    }
    else if (lowerMessage.includes('valla') || lowerMessage.includes('publicitaria')) {
      this.addBotMessage('Nuestras vallas publicitarias son de gran formato con materiales resistentes a la intemperie. Tiempo de producción: 24-48 horas.');
    }
    else if (lowerMessage.includes('tarjeta') || lowerMessage.includes('presentación')) {
      this.addBotMessage('Tarjetas de presentación con acabados premium: relieve, troquelado, foil stamping. Desde 24h de producción.');
    }
    else if (lowerMessage.includes('folio') || lowerMessage.includes('catálogo') || lowerMessage.includes('promocional')) {
      this.addBotMessage('Folletos y catálogos con diseños impactantes y diferentes acabados. Producción rápida y calidad profesional.');
    }
    else if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuánto')) {
      this.addBotMessage('Los precios varían según el producto, cantidad y especificaciones. ¿Podrías decirme qué producto te interesa para darte una cotización más precisa?');
    }
    else if (lowerMessage.includes('contacto') || lowerMessage.includes('ubicación') || lowerMessage.includes('dirección')) {
      this.addBotMessage(`Puedes contactarnos por WhatsApp al +${this.phoneNumber} o visitarnos en nuestra ubicación principal. ¿Necesitas ayuda con algo más?`);
    }
    else if (lowerMessage.includes('gracias') || lowerMessage.includes('agradezco')) {
      this.addBotMessage('¡De nada! Estamos para servirte. ¿Hay algo más en lo que pueda ayudarte?');
    }
    else if (lowerMessage.includes('whatsapp') || lowerMessage.includes('hablar con alguien')) {
      this.addBotMessage(`Perfecto, puedes contactar directamente a nuestro equipo de ventas por WhatsApp: +${this.phoneNumber}`);
      setTimeout(() => {
        window.open(this.whatsappLink, '_blank');
      }, 1000);
    }
    else {
      this.addBotMessage('¿Podrías ser más específico con tu consulta? O si prefieres, puedes contactar directamente a nuestro equipo de ventas por WhatsApp.');
      this.addBotMessage('También puedo ayudarte con información sobre: servicios, productos, precios o contacto.');
    }
  }
}