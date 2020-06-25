import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from '../services/faculty.service';
import { FacultyModal } from '../model/facultyModal';

@Component({
  selector: 'app-facultylist',
  templateUrl: './facultylist.component.html',
  styleUrls: ['./facultylist.component.css']
})
export class FacultylistComponent implements OnInit {
  facultys:any[];
  faculty:FacultyModal;
  constructor(private router:Router,public facutlyService:FacultyService,) {}

  ngOnInit() {
    this.facultys = this.facutlyService.getFacultys();
  }
  gotoFaculty(){
    this.router.navigate(['/faculty'])
  }
  editFacutly(i){
    console.log(i)
    this.faculty = this.facutlyService.getFacultys()[i];
    console.log(this.faculty);
    let facultyName = this.faculty.facultyName;
    console.log(facultyName);
    this.router.navigate(["/faculty",facultyName])
  }
  deleteFacutly(i){
    this.facultys.splice(i,1);
  }
}
