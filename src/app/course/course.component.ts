import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyService } from '../services/faculty.service';
import { ProgramModalService } from '../services/program-modal.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses;
  selectCourse;
  selectedCourse: { courseID: string, courseUnit: number, courseTitle: string, department: string, faculty: string };
  updatedDetail: { courseID: string, courseUnit: number, courseTitle: string, department: string, faculty: string };
  facultyDetail;
  departmentList:any[];
  programDetails;
  programList:string[]
  constructor(public courseService: CourseService,private actRouter: ActivatedRoute,
    public departmentService:DepartmentService,private router:Router,private facultyService:FacultyService,
    public programService:ProgramModalService) { 
      this.facultyDetail = facultyService.facultys
      this.programDetails = programService.programs;
    }
  lectures: { courseID: string, courseUnit: number, courseTitle: string, department: string, faculty: string,offered:boolean};
  facultyNew:string[]

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.facultyNew = this.departmentService.faculty;
    const courseid = this.actRouter.snapshot.params['courseid']
    this.selectCourse = this.courseService.getCourse(courseid);
    if(this.selectCourse){
      this.courseForm.patchValue(this.selectCourse);
      document.getElementById('updateButton').style.display = "block";
      document.getElementById('AddButton').style.display = "none";
      this.selected()
      this.courseForm.patchValue({department:this.selectCourse.department})
    }
  }

  courseForm = new FormGroup({
    courseID: new FormControl(''),
    courseUnit: new FormControl(''),
    courseTitle: new FormControl(''),
    department: new FormControl(''),
    faculty: new FormControl(''),
  });
  selected(){
    var b = this.courseForm.get('faculty').value;
    console.log(b);
    for(let i=0;i<this.facultyDetail.length;i++){
      if(b == this.facultyDetail[i].facultyName){
        this.departmentList = this.facultyDetail[i].department
      }
    }
  }
  addCourse() {
    this.lectures = this.courseForm.value;
    console.log(this.lectures);
    this.courseService.createCourse(this.lectures);
    this.lectures = { courseID: "", courseUnit: null, courseTitle: "", department: "", faculty: "" ,offered:false};
    this.router.navigate(['/course-list'])
  }
  selectedtCourse(course) {
    console.log('Selected Course', course);
    this.courseForm.patchValue(course);
    document.getElementById("updateButton").style.display="block";
    document.getElementById("AddButton").style.display="none";
  }
  updateCourse(){
    this.updatedDetail = this.courseForm.value;
    console.log(this.updatedDetail);
    var department = this.updatedDetail.department;
    var index = this.courses.findIndex(item => item.department === department)
    this.courses.splice(index,1,this.updatedDetail);
    this.router.navigate(['/course-list'])
  }
}
