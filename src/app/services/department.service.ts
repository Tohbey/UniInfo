import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  faculty = ["Engineering","Science","Art","Law","Social Science"]
  departments =[
    {departmentName:"Computer Engineering",faculty:this.faculty[0],hod:'Prof Moweta'},
    {departmentName:"Chemical Engineering",faculty:this.faculty[0],hod:'Prof Ayorindey'},
    {departmentName:"Mechanical Engineering",faculty:this.faculty[0],hod:'Prof Gbenga'}
  ];
  public getDepartment():Array<{departmentName:string,faculty:string,hod:string}>{
    return this.departments;
  }
  public createDepartment(Department:{departmentName:string,faculty:string,hod:string}){
    let x = this.departments.findIndex(e => e.departmentName == Department.departmentName)
    console.log(x)
    if(x<0){
      this.departments.push(Department);
   }
   else{
     window.alert('this Department already exist!!!');
    }
    
  }
  public getDepartments(departmentName:string){
    return this.departments.find(e => e.departmentName === departmentName)
  }
}
