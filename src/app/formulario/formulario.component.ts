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
      'nombre': new FormControl(null, [Validators.required, Validators.pattern('[-_a-zA-Z]*'),Validators.minLength(2)]),
      'apellido': new FormControl(null, [Validators.required, Validators.pattern('[-_a-zA-Z]*'),Validators.minLength(2)]),
      'usuario': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'dni': new FormControl(null, [Validators.required, Validators.min(1000000), Validators.max(99999999)]),
      'condiciones': new FormControl(null, Validators.required),
    })
  }

  submit(valorFormulario : any) {
    console.log('formulario enviado')
    
  }


}
