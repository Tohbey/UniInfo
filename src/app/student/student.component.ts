import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../services/department.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Student } from '../model/studentModel';
import { studentRegistration } from '../model/studentRegModal';
import { FacultyService } from '../services/faculty.service';
import { ProgramModalService } from '../services/program-modal.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  facultyNew:string[];
  departmentName: any[];
  courses: any[];
  selectedDepartement: string = '';
  unit: Number;
  marked: boolean;
  studentDetails: studentRegistration = new studentRegistration();
  fullDetail:Student;
  students;
  addCourse: any[];
  fullStudent:Student = new Student()
  facultyDetail:any[];
  departmentList:string[];
  programDetails;
  courseList:any[];
  programList:string[] = []

  constructor(public studentService: StudentService,
    public router: Router,
    public departmentDetail: DepartmentService,
    public courseDetail: CourseService, private actRouter: ActivatedRoute, public facultyService:FacultyService,
    public programService:ProgramModalService) {
    this.departmentName = departmentDetail.departments;
    this.courses = courseDetail.courses;
    this.facultyNew = departmentDetail.faculty
    this.facultyDetail = facultyService.facultys;
    this.programDetails = programService.programs;
  }
  student: { studentid: null, surname: "", firstname: "", faculty: "", department: "", level: null,programme: ""};

  ngOnInit() {
    this.students = this.studentService.getStudents();
    const id = parseInt(this.actRouter.snapshot.params['studentid']);
    console.log(id);
    if(id){
      this.fullDetail = this.studentService.getStudent(id);
      this.StudentForm.patchValue(this.fullDetail);
      this.selected()
      this.selectedCourse()
      console.log(this.fullDetail.department);
      console.log(this.fullDetail.programme);
      this.StudentForm.patchValue({department:this.fullDetail.department})
      this.StudentForm.patchValue({programme:this.fullDetail.programme})
      this.courseList = this.fullDetail.course;
      this.StudentForm.patchValue({gridCheck:true});
      document.getElementById('adding').style.display = "none";
      document.getElementById('editing').style.display = "block";
      document.getElementById('add').style.display = "none";
      document.getElementById('update').style.display = "block";
    }
  }
  StudentForm = new FormGroup({
    studentid: new FormControl(''),
    surname: new FormControl(''),
    firstname: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl(''),
    programme: new FormControl(''),
    level: new FormControl('400'),
    email: new FormControl(''),
    gridCheck: new FormControl('')
  })
 
  selected(){
    var b = this.StudentForm.get('faculty').value;
    for(let i=0;i<this.facultyDetail.length;i++){
      if(b == this.facultyDetail[i].facultyName){
        this.departmentList = this.facultyDetail[i].department
      }
    }
  }
  selectedDepartment(){
    this.programList.splice(0,10);
    var c = this.StudentForm.get('department').value;
    this.programList = this.programService.getArray(c)
    console.log(this.programList) 
  }
  selectedCourse(){
    var d = this.StudentForm.get('programme').value
    console.log(d)
    this.courseList = this.programService.getCourse(d)
  }
  addCourses(event, i) {
    this.studentDetails.coursesDetails = []
    this.marked = event.target.checked;
    this.courses[i].offered = this.marked;
    console.log(this.courses[i].offered);
    for(let i=0;i<this.courses.length;i++){
      if (this.courses[i].offered == true) { 
        this.studentDetails.coursesDetails.push(this.courses[i])
        console.log(this.studentDetails.coursesDetails);
      }
    }     
  }
  addStudent() {
    this.fullStudent = this.StudentForm.value
    this.fullStudent.course = this.studentDetails.coursesDetails
    console.log(this.fullStudent)
    this.studentService.createStudents(this.fullStudent);
    this.router.navigate(["/students"]);
  }
  updateStudent() {
    this.student = this.StudentForm.value;
    this.fullDetail.department = this.student.department;
    this.fullDetail.faculty = this.student.faculty;
    this.fullDetail.firstname = this.student.firstname;
    this.fullDetail.surname = this.student.surname;
    this.fullDetail.level = this.student.level;
    this.fullDetail.studentid = this.student.studentid;
    this.fullDetail.programme = this.student.programme;
    this.fullDetail.course = this.studentDetails.coursesDetails;
    var surName = this.fullDetail.surname;
    var index = this.students.findIndex(item => item.surname === surName) 
    this.students.splice(index,1,this.fullDetail);
    this.router.navigate(["/students"]);
  }
}
