import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { department } from '../model/departmentModal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  departments
  constructor(public departmentService: DepartmentService,private router:Router) { }
  selectedDepartment:department = new department();

  ngOnInit() {
    this.departments = this.departmentService.getDepartment();
  }
  addDepartment(){
   this.router.navigate(['/department']) 
  }
  editDepartment(i){
    console.log(this.departments[i]);
    this.selectedDepartment.departmentName = this.departments[i].departmentName;
    console.log(this.selectedDepartment.departmentName);
    let departmentName = this.selectedDepartment.departmentName;
    this.router.navigate(["/department",departmentName])
  }
  deleteDepartment(i){
    this.departments.splice(i, 1);
  }
}
