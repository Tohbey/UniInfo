import { Injectable } from '@angular/core';
import { Courses } from '../model/courseModal';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Courses[] = [
    {courseID:"CPE401",courseUnit:2,courseTitle:"Mircoprocessors & Microcomputer",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false},
    {courseID:"CPE403",courseUnit:2,courseTitle:"Principles of telecommunication",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false},
    {courseID:"CPE405",courseUnit:2,courseTitle:"Digital Electronics",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false},
    {courseID:"CPE409",courseUnit:2,courseTitle:"Computer Programming",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false},
    {courseID:"EEG401",courseUnit:2,courseTitle:"Classical Control System Analysis",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false},
    {courseID:"EEG405",courseUnit:2,courseTitle:"Electromagentic Waves",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false},
    {courseID:"GEG401",courseUnit:2,courseTitle:"Technical Communication",department:"Electrical and Electronics Engineering",faculty:"Engineering",offered:false}
  ]
  
  constructor() { }
  public getCourses():Courses[]{
    return this.courses;
  }
  public createCourse(course:Courses){
    let x = this.courses.findIndex(e => e.courseID == course.courseID)
    console.log(x)
    if(x<0){
     this.courses.push(course)
   }
   else{
     window.alert('this course already exist!!!');
    }
  }
  public getCourse(id:string){
    return this.courses.find(e => e.courseID == id);
  }
  public getCourseby(title:string){
    return this.courses.find(e => e.courseTitle == title);
  }
  public getCoursebyFaculty(faculty:string){
    return this.courses.filter(course => course.faculty.toLowerCase() == faculty.toLowerCase())
  }
}
