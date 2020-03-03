import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import {DataService} from '../data.service';

import { Router, Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private service:DataService,
    private router : Router, private routes: ActivatedRoute) { }

  addForm: FormGroup;
  ngOnInit() {
    const routerParams = this.routes.snapshot.params;

    this.service.getById(routerParams.id)
    .subscribe((data: any) =>{
      console.log(data);
      this.addForm.patchValue(data);
      console.log(this.addForm);
    });

    this.addForm = this.formBuilder.group({
      id:[],
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

  update(){
    console.log(this.addForm.value); 
    this.service.updateEmployee(this.addForm.value).
    subscribe(()=> {
      this.router.navigate(['view']);
    }, error =>{
      alert(error);
    })
  }

}
