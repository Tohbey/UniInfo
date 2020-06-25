import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { CourseService } from '../services/course.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ResultSheet } from '../model/resultSheet';
import { Student } from '../model/studentModel';


@Component({
  selector: 'app-result-computation',
  templateUrl: './result-computation.component.html',
  styleUrls: ['./result-computation.component.css']
})
export class ResultComputationComponent implements OnInit {
  students: any[];
  courses: any[];
  studentID: number;
  totalUnit: number;
  grade: number;
  points: number[] = [];
  totalPoints=0;
  studentIDs:string[];
  result:number;
  preResult:number;
  details:Student;
  num:number;
  resultSheet:ResultSheet = new ResultSheet();
  grades = [
    { point: 5, score: "A" },
    { point: 4, score: "B" },
    { point: 3, score: "C" },
    { point: 2, score: "D" },
    { point: 1, score: "E" },
    { point: 0, score: "F" }
  ];

  constructor(public studentDetail: StudentService) {
    this.students = studentDetail.Students;
  }

  ngOnInit() { }
 
  studentIDForm = new FormGroup({
    inputId: new FormControl('')
  })

  searchStudent(id) {
    id = this.studentIDForm.get('inputId').value;
    console.log(id);
    this.num = this.students.findIndex(inputId => inputId.studentid == id);
    if(this.num > -1) {
      this.resultSheet.studentDetail = this.students[this.num];
      this.resultSheet.resultDetail = this.students[this.num].course;
      console.log(this.resultSheet);
      console.log(this.resultSheet.studentDetail.studentid)
      console.log(this.resultSheet.resultDetail)
    } else {
      console.log('Cannot find student record');
    }
    this.studentIDForm.reset();
  }

  selectChangeHandler(event,i){
    var x = event.target.value;
    this.resultSheet.resultDetail[i].grade = parseInt(x);
    console.log(this.resultSheet.resultDetail[i].grade);
  }

  getTotalPoint(){
    let totalPoints = 0;
    for (let i = 0; i < this.resultSheet.resultDetail.length; i++) {
      totalPoints += this.resultSheet.resultDetail[i].grade;
    }
    return totalPoints;
  }

  getTotalUnit() {
    var val = 0;
    for (let i = 0; i < this.resultSheet.resultDetail.length; i++) {
      val += this.resultSheet.resultDetail[i].courseUnit;
    }
    return val;
  }

  getCgpa() {
    console.log(this.getTotalPoint());
    console.log(this.getTotalUnit());
    console.log(this.resultSheet.resultDetail);
    document.getElementById('cgpa').style.display='block';
    this.preResult= this.getTotalPoint()/this.getTotalUnit();
    this.result = parseFloat(this.preResult.toPrecision(3));
    return this.result;
  }
}
