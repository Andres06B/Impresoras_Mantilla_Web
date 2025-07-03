import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.css'
})
export class ContactModal {

  @Output() closeModal = new EventEmitter<void>();

  // Datos de contacto - reemplaza con tus datos reales
  phoneNumber = '+57 301 437 4606';
  whatsappNumber = '+57 301 437 4606';
  emailAddress = 'imprentegrafica91@gmail.com';

  onClose() {
    this.closeModal.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
