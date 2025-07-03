import { CommonModule } from '@angular/common';
import { Component, HostListener} from '@angular/core';
import { QuoteModal } from '../../ui/quote-modal/quote-modal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,QuoteModal],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
  activeSection = 'Inicio';
  showQuoteModal = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  openQuoteModal(): void {
    this.showQuoteModal = true;
    this.menuOpen = false;
  }

  closeQuoteModal(): void {
    this.showQuoteModal = false;
  }

  smoothScroll(targetId: string): void {
    this.menuOpen = false;
    const target = document.getElementById(targetId);
    if (target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top + startPosition - 80;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);
        if (timeElapsed < duration) window.requestAnimationFrame(animation);
      };

      window.requestAnimationFrame(animation);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sections = ['Inicio', 'Servicios', 'Galeria', 'Proceso', 'Ubicacion', 'Testimonios'];
    const scrollPosition = window.pageYOffset + 150;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
