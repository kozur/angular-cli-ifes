import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  grupoFormulario: FormGroup;
  nombreChofer:string;
  apellidoChofer:string;
  licencia:string;
  email:string;
  chofer:any;


  constructor(
    private fb: FormBuilder,
    
  ) {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.grupoFormulario = fb.group({
      'nombreChofer':['',Validators.required],
      'apellidoChofer':['',Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'licencia':[null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  ngOnInit() {
  }

  agregarChofer(unChofer:any){
    this.nombreChofer = unChofer.nombreChofer;
    this.apellidoChofer = unChofer.apellidoChofer;
    this.licencia = unChofer.licencia;
    this.email = unChofer.email;
  }




}
