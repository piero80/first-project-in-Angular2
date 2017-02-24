import { Component, OnInit  } from '@angular/core';
import { DataService } from '../services/user.service';
import { IUser } from '../models/user'

@Component({
    selector:'employee',
    styleUrls: ['app/components/tabledata.css'],
    templateUrl:'app/components/tabledata.html'
})
export class EmployeeComponent
{
    employees:IUser[];
  
    constructor(private dataservice:DataService){
        
    }

    addEmployee(employeeName)
    {
        this.dataservice.addEmployee(employeeName);
    }
   

    ngOnInit () {
        this.dataservice.getEmployees()
        .subscribe(
            customer=>this.employees=customer,
            error=>console.log("error"+error)
            );
       
    }

    getAlbum(id){
        this.dataservice.getAlbums(id)
        .subscribe(
            albums=>this.employees.find(emp=>emp.id==id).albums = albums
            );
    }
}
