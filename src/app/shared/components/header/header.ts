import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  
 showQuoteModal: boolean = false;
  menuOpen: boolean = false;
  activeSection: string = 'Inicio';
  sections: string[] = ['Inicio', 'Servicios', 'Galeria', 'Proceso', 'Ubicacion', 'Testimonios'];

  ngOnInit() {
    this.checkActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkActiveSection();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openQuoteModal() {
    this.showQuoteModal = true;
    this.menuOpen = false; // cerrar menú al abrir modal
    document.body.style.overflow = 'hidden';  // bloquear scroll al abrir modal
  }

  closeQuoteModal() {
    this.showQuoteModal = false;
    document.body.style.overflow = 'auto';  // desbloquear scroll al cerrar modal
  }

  smoothScroll(sectionId: string) {
    this.menuOpen = false;
    this.activeSection = sectionId;

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  checkActiveSection() {
    const scrollPosition = window.pageYOffset;
    const headerHeight = document.querySelector('header')?.clientHeight || 0;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const elementOffset = element.offsetTop;
        const elementHeight = element.clientHeight;

        if (
          scrollPosition >= elementOffset - headerHeight - 50 &&
          scrollPosition < elementOffset + elementHeight - headerHeight - 50
        ) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
 
}
