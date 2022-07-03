import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class  FormularioComponent implements OnInit {
  
  estadoFormulario : string = 'incompleto';

  public formulario: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: [],
      apellido: [],
      usuario: [],
      email: [],
      dni: [],
      condiciones: []
   });
  }

  ngOnInit(): void {
  }


  submit(valorFormulario: any){
    console.log(this.formulario);
  }
}
