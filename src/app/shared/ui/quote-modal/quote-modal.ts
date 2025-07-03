import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quote-modal',
  imports: [],
  templateUrl: './quote-modal.html',
  styleUrl: './quote-modal.css'
})
export class QuoteModal {
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
    document.body.style.overflow = 'auto'; // Restaurar scroll
  }
}
