import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../services/course.service';
import { DepartmentService } from '../services/department.service';
import { Router } from '@angular/router';
import { Courses } from '../model/courseModal';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courses;
  selectedCourse: Courses = new Courses(); 
  updatedDetail: { courseID: string, courseUnit: number, courseTitle: string, department: string, faculty: string };
  constructor(public courseService: CourseService,private router:Router,public departmentService:DepartmentService) { 
  }
  facultyNew:string[]
  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.facultyNew = this.departmentService.faculty;
  }
  deleteCourse(i) {
    this.courses.splice(i, 1);
  }
  addCourse(){
    this.router.navigate(["/courses"]);
  }
  editCourse(i){
    console.log(this.courses[i]);
    this.selectedCourse.courseID = this.courses[i].courseID;
    console.log(this.selectedCourse.courseID);
    let courseid = this.selectedCourse.courseID;
    this.router.navigate(["/courses",courseid])
  }
}
