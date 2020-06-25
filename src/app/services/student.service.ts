import { Injectable } from '@angular/core';
import { Student } from '../model/studentModel';
import { studentRegistration } from '../model/studentRegModal';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  Students:Student[] = [
    {studentid:1234,surname:"fafowora", 
      firstname:"tobi", faculty:"Engineering",
          department:"Electrical and Electronics Engineering",level:400,programme:"Computer Engineering",
          course:[
            {courseID:"CPE401",courseUnit:2,courseTitle:"Mircoprocessors & Microcomputer",offered:true},
            {courseID:"CPE403",courseUnit:2,courseTitle:"Principles of telecommunication",offered:true},
            {courseID:"CPE405",courseUnit:2,courseTitle:"Digital Electronics",offered:true},
            {courseID:"CPE409",courseUnit:2,courseTitle:"Computer Programming",offered:true},
            {courseID:"EEG401",courseUnit:2,courseTitle:"Classical Control System Analysis",offered:true},
            {courseID:"EEG405",courseUnit:2,courseTitle:"Electromagentic Waves",offered:true},
            {courseID:"GEG401",courseUnit:2,courseTitle:"Technical Communication",offered:true}
          ]
    },
    {studentid:2345,surname:"thompson" ,
      firstname:"tomi", faculty:"Engineering",
      department:"Electrical and Electronics Engineering",level:400,programme:"Computer Engineering",
        course:[
            {courseID:"CPE401",courseUnit:2,courseTitle:"Mircoprocessors & Microcomputer",offered:true},
            {courseID:"CPE403",courseUnit:2,courseTitle:"Principles of telecommunication",offered:true},
            {courseID:"CPE405",courseUnit:2,courseTitle:"Digital Electronics",offered:true},
            {courseID:"CPE409",courseUnit:2,courseTitle:"Computer Programming",offered:true},
            {courseID:"EEG401",courseUnit:2,courseTitle:"Classical Control System Analysis",offered:true},
            {courseID:"EEG405",courseUnit:2,courseTitle:"Electromagentic Waves",offered:true},
            {courseID:"GEG401",courseUnit:2,courseTitle:"Technical Communication",offered:true}
          ]
    }
  ];

  public getStudents():Student[]{
    return this.Students;
  }
  public createStudents(student:Student){
    let x = this.Students.findIndex(e => e.studentid == student.studentid)
     console.log(x)
     if(x<0){
      this.Students.push(student)
    }
    else{
      window.alert('this student already exist!!!');
    }
  }
  public getStudent(id:number){
    const student: Student =  this.Students.find(e => e.studentid == id);
    return student? student : null;
  }
}
