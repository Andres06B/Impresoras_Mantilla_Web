import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviciosw',
  imports: [],
  templateUrl: './serviciosw.html',
  styleUrl: './serviciosw.css'
})
export class Serviciosw {
 constructor(private router: Router) {}

  navigateTo(route: string): void {
    switch(route) {
      case 'impresoras':
        this.router.navigate(['/impresoras']);
        break;
      case 'diseno':
        this.router.navigate(['/diseno']);
        break;
      case 'marketing-digital':
        this.router.navigate(['/marketing-digital']);
        break;
      default:
        this.router.navigate(['/']);
    }
  }
}
