import { Component } from '@angular/core';
import { ContactModal } from '../../../../shared/ui/contact-modal/contact-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ContactModal,CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  showContactModal = false;

  toggleContactModal() {
    this.showContactModal = !this.showContactModal;
  }
}
