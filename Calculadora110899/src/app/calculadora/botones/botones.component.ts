import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  @Input() Valoruno: string =""
  @Input() Valordos : string=""

  @Output()RTA : EventEmitter<string> = new EventEmitter<string>();
  

  suma() {
    let resultado = parseInt(this.Valoruno) + parseInt(this.Valordos);
    this.RTA.emit(resultado.toString()); 
    console.log('Resultado:', resultado);
  }

  resta() {
    let resultado = parseInt(this.Valoruno) - parseInt(this.Valordos);
    this.RTA.emit(resultado.toString()); 
    console.log('Resultado:', resultado);
  }

  multiplicacion() {
    let resultado = parseInt(this.Valoruno) * parseInt(this.Valordos);
    this.RTA.emit(resultado.toString()); 
    console.log('Resultado:', resultado);
  }

  division() {
    let resultado = parseFloat(this.Valoruno) / parseFloat(this.Valordos);
    this.RTA.emit(resultado.toString()); 
    console.log('Resultado:', resultado);
  }

  potencia() {
    let resultado = Math.pow(parseInt(this.Valoruno), parseInt(this.Valordos));
    this.RTA.emit(resultado.toString()); 
    console.log('Resultado:', resultado);
  }

  limpiar() {
    this.RTA.emit(""); 
  }


}
