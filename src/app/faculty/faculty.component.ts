import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FacultyService } from '../services/faculty.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyModal } from '../model/facultyModal';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit{
  
  form: FormGroup;
  list:FormArray
  facultyDetails;
  facultys
  selectedFaculty:FacultyModal


  ngOnInit() {
    this.facultys = this.facultyServices.getFacultys();
    const facultyName = this.actRouter.snapshot.params['facultyName']
    if(facultyName){
      this.selectedFaculty = this.facultyServices.getFaculty(facultyName)
      console.log(this.selectedFaculty);
      this.form.patchValue({faculty:this.selectedFaculty.facultyName,departmentList:this.selectedFaculty.department})
    } 
   }

  constructor(private fb: FormBuilder, public facultyServices:FacultyService,private router:Router,private actRouter:ActivatedRoute){
    this.form = this.fb.group({
      faculty:'',
      department: this.fb.array([]),
    })
   }
   getCreds(){
    const creds = this.form.controls.department as FormArray;
    return creds;
   }
   addCreds(){
    this.getCreds().push(this.fb.group({
       departmentList:''
     }));
   }
   
   removeCreds(item){
    this.getCreds().removeAt(item);
   }
  
   submitall(){
    this.facultyDetails = this.form.value;
    console.log(this.facultyDetails)
    this.facultyServices.createFaculty(this.facultyDetails);
    this.router.navigate(['/faculty-list'])
  }
}
