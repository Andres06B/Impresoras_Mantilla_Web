import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { BotonesWc } from '../../shared/ui/botones-wc/botones-wc';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,Header,Footer, ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
