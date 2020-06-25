import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyService } from '../services/faculty.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments
  facultyNew:string[]
  selectDepartment;
  facultyDetail;
  updatedDetail: { departmentName: string, faculty: string, hod: string};
  constructor(public departmentService: DepartmentService,private router:Router,private actRouter:ActivatedRoute, public facultyService: FacultyService) { 
    this.facultyDetail = facultyService.facultys;
  }
  study: {departmentName:string,faculty:string,hod:string}
  
  ngOnInit() {
    this.departments = this.departmentService.getDepartment();
    this.facultyNew = this.departmentService.faculty;
    const departmentName = this.actRouter.snapshot.params['departmentName']
    this.selectDepartment = this.departmentService.getDepartments(departmentName)
    if(departmentName){
      this.departmentForm.patchValue(this.selectDepartment);
      document.getElementById('updateDepartment').style.display = "block";
      document.getElementById('addDepartment').style.display = "none";
    }
  }

  departmentForm = new FormGroup({
    hod:new FormControl(''),
    departmentName: new FormControl(''),
    faculty:new FormControl('')
  });

  addDepartment(){
    this.study = this.departmentForm.value;
    console.log(this.study);
    console.log(this.facultyDetail);
    for(let i=0;i<this.facultyDetail.length;i++){
        if(this.study.faculty === this.facultyDetail[i].facultyName){
          this.facultyDetail[i].department.push(this.study.departmentName)
          console.log(this.facultyDetail[i].department)
        }
    }
    this.router.navigate(['/department-list'])
    this.departmentService.createDepartment(this.study);
    this.study = {departmentName:"",faculty:"",hod:""};
    this.departmentForm.reset();
  }
  updateDepartment(){
    this.updatedDetail = this.departmentForm.value;
    console.log(this.updatedDetail)
    var departmentname = this.updatedDetail.departmentName;
    var index = this.departments.findIndex(item => item.departmentName === departmentname)
    this.departments.splice(index,1,this.updatedDetail)
    this.router.navigate(['/department-list'])
  }
}
