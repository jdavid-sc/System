import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { CalculaFechaComponent } from './pages/calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';
import { SyspagesRoutingModule } from './syspages-routing.module';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    ConversionesComponent,
    CalculaFechaComponent,
    FormularioComponent,
    NavbarComponent,
    CambioLetrasPipe,
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    SyspagesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SyspagesModule { }
