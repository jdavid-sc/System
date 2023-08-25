import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { CalculaFechaComponent } from './pages/calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   component: HomeComponent,
      // },
      {
        path: 'bienvenida',
        component: BienvenidaComponent
      },
      {
        path: 'conversiones',
        component: ConversionesComponent
      },
      {
        path: 'calcula-fecha',
        component: CalculaFechaComponent
      },
      {
        path: 'formulario',
        component: FormularioComponent
      }
    ] 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyspagesRoutingModule { }
