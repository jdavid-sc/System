import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario!: FormGroup;
  patronLetras: string  = "^[a-zA-Z]+$`";

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombres: ['',[Validators.required, ]],
      apellidos: ['',[Validators.required, Validators.minLength(4)]],
      fumas: [false,[Validators.required, Validators.minLength(4)]],
      lecturaActualmente: [ false ,[Validators.required]],
      ultimosTresLibrosLeidos: ['', [Validators.required]]
    })
  }

  enviarFormulario(){
    if(this.formulario.valid){
      const valuesInput = this.formulario.get('ultimosTresLibrosLeidos')?.value;
      const valoresArray = valuesInput.split('\n').map((valor:string) => valor.trim());
      console.log(valoresArray);

      const nombresArray = valoresArray.map((valor:any) => valor.replace(/\d+$/, '').trim());
      const numerosArray = valoresArray.map((valor:any) => Number(valor.match(/\d+$/)));
      console.log(nombresArray); // Nombres extraídos
      console.log(this.formulario.value);
      this.formulario.reset();
    }else {
      console.log("error en el formulario");
      this.formulario.markAllAsTouched();
    }
  }

  campoInvalido(campo: string){
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }

}
