import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { DepartmentService } from '../services/department.service';
import { FacultyService } from '../services/faculty.service';
import { ProgramModal } from '../model/programModal';
import { ProgramModalService } from '../services/program-modal.service';
import { CourseService } from '../services/course.service';
import { Courses } from '../model/courseModal';


@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  facultyNew:string[];
  facultyDetail;
  programmeForm:FormGroup;
  courseForm:FormGroup;
  departmentList:any[];
  fullFaculty:ProgramModal;
  updateFaculty:ProgramModal;
  courses: any[];
  coursesList:Courses[];
  coursesTitle:any[]=[];
  courseDetail:any[]=[];
  programes:ProgramModal;
  programList;
    constructor( public router: Router,public studentService: StudentService,private formBuilder:FormBuilder,
    public departmentDetail: DepartmentService, public facultyService: FacultyService,
    public programService:ProgramModalService, private actRouter: ActivatedRoute,public courseService:CourseService) { 
      this.facultyNew = departmentDetail.faculty;
      this.facultyDetail = facultyService.facultys;
      this.courses = courseService.courses;
  
    }

  ngOnInit() {
    this.programList = this.programService.getPrograms();
    this.programmeForm = this.formBuilder.group({
      'programe': '',
      'faculty': '',
      'department': ''
    });
    this.courseForm = this.formBuilder.group({
      'courseTitle':'',
    });
    const programmename = this.actRouter.snapshot.params['programeName']
    console.log(programmename)
    if(programmename){
      this.fullFaculty = this.programService.getProgram(programmename);
      this.programmeForm.patchValue(this.fullFaculty);
      this.selected()
      this.programmeForm.patchValue({programFaculty:this.fullFaculty.faculty})
      let d = this.fullFaculty.programe
      document.getElementById('coursedropdown').style.display = "none"
      document.getElementById('courseTable').style.display = "block"
      this.courseDetail = this.fullFaculty.courses
      document.getElementById('registerButton').style.display = "none"
      document.getElementById('updateButton').style.display = "block"
    }
  }
  addCourses(){
    let b = this.courseForm.get('courseTitle').value;;
    console.log(b)
    this.courseDetail.push(this.courseService.getCourseby(b))
    console.log(this.courseDetail)
    this.courseForm.reset()
    document.getElementById('courseTable').style.display = "block";
  }
  deleteCourse(i){
    this.courseDetail.splice(i, 1);
  }
  registerProgram(){
    this.programes = this.programmeForm.value;
    this.programes.courses = this.courseDetail
    console.log(this.programes)
    this.programService.createPrograms(this.programes)
    this.programmeForm.reset();
    this.router.navigate(['/programme-list'])
  }
  selected(){
    var b = this.programmeForm.get('faculty').value;
    for(let i=0;i<this.facultyDetail.length;i++){
      if(b == this.facultyDetail[i].facultyName){
        this.departmentList = this.facultyDetail[i].department
      }
    }
    this.coursesList = this.courseService.getCoursebyFaculty(b);
    for(let i=0;i<this.coursesList.length;i++){
      this.coursesTitle.push(this.coursesList[i].courseTitle);
    }
  }
  updateProgram(){
    this.updateFaculty = this.programmeForm.value;
    this.updateFaculty.courses = this.courseDetail;
    var programeName = this.updateFaculty.programe;
    var index = this.programList.findIndex(item => item.programe === programeName)
    this.programList.splice(index,1,this.updateFaculty);
    this.router.navigate(["/programme-list"]);
  }
}
