import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    // this.formulario = this.fb.group({
    //   nombre: ['valor inicial', [Validators.required]],
    //   apellido: [null, [Validators.required]],
    //   usuario: [null, [Validators.required]],
    //   email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    //   dni: [null, [Validators.required]],
    //   condiciones: [null, [Validators.required]]
    // });


    this.formulario = new FormGroup({
      'nombre': new FormControl(null, [Validators.required, Validators.pattern('[-_a-zA-Z]*')]),
      'apellido': new FormControl(null, [Validators.required, Validators.pattern('[-_a-zA-Z]*')]),
      'usuario': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'dni': new FormControl(null, [Validators.required, Validators.maxLength(8),Validators.minLength(7)]),
      'condiciones': new FormControl(null, Validators.required),
    })
  }

  submit(valorFormulario: any) {
    console.log(this.formulario.value);
    console.log(this.formulario.get('nombre')?.errors?.['required']);
  }
}
