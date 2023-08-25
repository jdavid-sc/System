import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';

  constructor( private router: Router,
               ) { }

  login(formularioLogin: NgForm) {

    if(formularioLogin.valid) {
      this.usuario = formularioLogin.form.controls['usuario'].value;
      this.password = formularioLogin.form.controls['password'].value;

      // this.authService.login(this.usuario, this.password)
      // .subscribe({
      //   next: () => {
      //     this.authService.sesionIniciada = true;
      //     this.router.navigate(['/home']);
      //   },
      //   error: (e: ErrorEvent) => {
      //     Swal.fire('Error', e.error.mensaje, 'warning');
      //   }
      // })
    }
  }
}
