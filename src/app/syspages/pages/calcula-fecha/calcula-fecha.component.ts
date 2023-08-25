import { Component } from '@angular/core';
import { UnidadFecha } from '../../interfaces/syspages.interface';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-calcula-fecha',
  templateUrl: './calcula-fecha.component.html',
  styleUrls: ['./calcula-fecha.component.css']
})
export class CalculaFechaComponent {

  unidades: UnidadFecha[] = [
    {value: 'dia', viewValue: 'Día'},
    {value: 'mes', viewValue: 'Mes'},
    {value: 'anio', viewValue: 'Año'},
  ];
  
  unidadSeleccionada = '';

  cantidadDias = 0;
  cantidadMeses = 0;
  cantidadAnios = 0;
  cantidadAcambiar = 0;
  fechaInicial: any;
  fechaFinal: any = "";

  constructor(){  
  }
  
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fechaInicial = event.value;
  }

  CalcularFecha(){

    switch(this.unidadSeleccionada) {
      case "dia":
          this.cantidadDias = this.cantidadAcambiar;
        break;
      case "mes":
          this.cantidadMeses = this.cantidadAcambiar;
        break;
      case "anio":
        this.cantidadAnios = this.cantidadAcambiar;
        break;
    }

    let newAnio = this.fechaInicial.getFullYear() + this.cantidadAnios;
    let newMes = this.fechaInicial.getMonth() + this.cantidadMeses;
    let newDia = this.fechaInicial.getDate() + this.cantidadDias;

    this.fechaFinal = new Date(newAnio, newMes, newDia);

  }
 

}
