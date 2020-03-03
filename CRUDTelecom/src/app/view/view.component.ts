import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import {pipe, of} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Employee } from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: any;
  // Durations are in minutes
 


  constructor(private dataService:DataService, private router : Router) { }
  pageActual: number = 1; 
  pageSize = 4;
  pageActualc: number = 1; 
  pageSizec = 4;
  employees : any;
  empleados;
  emps;
  dataExist : boolean;
  salarioTC: number;
  salarioT: number;
  ngOnInit() {
    this.showData();
  }

  showData() {
    this.dataService.getData()
    .subscribe((data : any[]) => {
      this.employees = data;
      //console.log(this.employees);
      this.salarioT = this.employees.reduce((accum, curr) => accum + curr.salario, 0);
      console.log(this.salarioT);
      if(this.employees.length > 0){
        this.dataExist = true;
      }else{
        this.dataExist = false;
      }
    })
  }

  delete(employees:any):void{
    this.dataService.deleteEmployee(employees.id)
    .subscribe(data => {
      this.employees = this.employees.filter(u => u !== employees);
      //console.log(this.employees);
      this.employeeD();
      if(this.employees.length > 0){
        this.dataExist = true;
      }else{
        this.dataExist = false;
      }
      //console.log(this.dataExist);
    })
  }

  edit(employees:any){
    this.id = employees.id;
    this.router.navigate(['edit/' + this.id]);
  }

  employeeD(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Exito',
      showConfirmButton: false,
      timer: 1500
    })
  }
  salarioContratistas(){
    this.dataService.getData().
    subscribe( resp => {
      this.empleados = resp;
      this.emps = this.empleados
      .filter(empleado => empleado.contratista ===1 )
      ;
      //console.log(emps)
      this.salarioTC = this.emps.reduce((acc, cur) => acc + cur.salario, 0);
      //console.log(this.salarioTC);
      //console.log(this.emps);
      //alert('La suma total del salario de los contratistas es: '+sumatoriaObjeto);
    })
  }
  
}
