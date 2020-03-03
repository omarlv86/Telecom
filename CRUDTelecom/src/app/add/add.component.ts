import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private service:DataService,
    private router : Router) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      eId:[],
      nombre: ['',[Validators.required, Validators.maxLength(20)]],
      apellidoP: ['', [Validators.required, Validators.maxLength(20)]],
      apellidoM: ['',[Validators.required, Validators.maxLength(20)]],
      puesto:['', [Validators.required, Validators.maxLength(50)]],
      fechaNac:['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      salario:['', [Validators.required, Validators.maxLength(5)]],
      contratista:['', Validators.required]
    });
  }

  onSubmit(){
  if(this.addForm.status == 'VALID'){
    this.service.createEmployee(this.addForm.value)
  .subscribe(data => {
    this.router.navigate(['view']);
  });
  }else if(this.addForm.status == 'INVALID'){
    this.showModal();
  }
  
  //console.log("Presionando el boton guardar");
  
}

showModal(){
  Swal.fire({
    title: 'Error!',
    text: 'Verifique los campos ingresados',
    icon: 'error',
    //confirmButtonText: 'Cool'
    showConfirmButton: false,
    timer: 1500
  })
}

}
