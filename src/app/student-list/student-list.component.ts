import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { studentRegistration } from '../model/studentRegModal';
import { Router } from '@angular/router';
import { Student } from '../model/studentModel';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students;
  courses: any[];
  updatedStudent:studentRegistration = new studentRegistration();
  studentDetails: studentRegistration = new studentRegistration();
  student:Student

  constructor(public studentService:StudentService, public router: Router) {}
  
  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
  deleteStudent(i){
    this.students.splice(i,1);
  }
  deleteCourse(i){
    this.courses.splice(i,1);
  }
  gotoCreateStudent(){
    this.router.navigate(["/createStudent"]);
  }
  editStudent(i){
    console.log(i)
    this.student = this.studentService.getStudents()[i];
    console.log(this.student);
    let id = this.student.studentid;
    console.log(id)
    this.router.navigate(["/student",id]);
  }
}
