import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumeroComponent } from "./calculadora/numero/numero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora110899';
}
