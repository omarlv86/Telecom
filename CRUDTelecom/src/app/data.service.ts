import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = 'http://localhost/backendTelecom/';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url+'list.php');
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url+'delete.php?id='+id);
  }

  createEmployee(employee: any[]){
    return this.http.post(this.url+'insert.php', employee);
  }

  getById(id:number){
    return this.http.get(this.url+"getById.php?id=" + id);
  }
  
  updateEmployee(employee:any){
    return this.http.put(this.url+'update.php?id='+employee.id, employee);
  }
  
}
