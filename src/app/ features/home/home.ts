import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Serviciosw } from './components/serviciosw/serviciosw';
import { Galeria } from './components/galeria/galeria';
import { Proceso } from './components/proceso/proceso';
import { Redes } from './components/redes/redes';
import { Ubicacion } from './components/ubicacion/ubicacion';
import { Testimonios } from './components/testimonios/testimonios';
import { Faq } from './components/faq/faq';
import { BotonesWc } from '../../shared/ui/botones-wc/botones-wc';
import { CtaFinal } from './components/cta-final/cta-final';

@Component({
  selector: 'app-home',
  imports: [
    Hero,Serviciosw,Galeria,Proceso,Redes,Ubicacion,Testimonios,Faq,CtaFinal
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
