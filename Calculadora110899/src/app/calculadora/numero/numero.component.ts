import { Component, input, Input, Output } from '@angular/core';
import { BotonesComponent } from "../botones/botones.component";

@Component({
  selector: 'app-numero',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './numero.component.html',
  styleUrl: './numero.component.css'
})
export class NumeroComponent {
  @Output() valor1 : string = "";
  @Output() valor2 : string = "";
  @Input() rta : string=""

  val1(event: any) {
    this.valor1 = event.target.value;
  }
  val2(event: any) {
    this.valor2 = event.target.value;  
  }
  resultado(result: string) {
    const inputValor1 = document.getElementById('valor1') as HTMLInputElement | null;
    const inputValor2 = document.getElementById('valor2') as HTMLInputElement | null;

    if (result === "") {
      if (inputValor1) {
        inputValor1.value = ""; 
        this.valor1 = ""; 
      }
      if (inputValor2) {
        inputValor2.value = ""; 
        this.valor2 = "";
      }
    }
      this.rta = result;

  }

}
