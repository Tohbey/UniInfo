import { Injectable } from '@angular/core';
import { ProgramModal } from '../model/programModal';
import { ProgramService } from './program.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramModalService {
  programeList:any[] = [];

  programs:ProgramModal[] = [
      {
        faculty:"Engineering",
        department:"Electrical and Electronics Engineering",
        programe:"Computer Engineering",
        courses:[
          {courseID:"CPE401",courseUnit:2,courseTitle:"Mircoprocessors & Microcomputer"},
          {courseID:"CPE403",courseUnit:2,courseTitle:"Principles of telecommunication"},
          {courseID:"CPE405",courseUnit:2,courseTitle:"Digital Electronics"},
          {courseID:"CPE409",courseUnit:2,courseTitle:"Computer Programming"},
          {courseID:"EEG401",courseUnit:2,courseTitle:"Classical Control System Analysi"},
          {courseID:"EEG405",courseUnit:2,courseTitle:"Electromagentic Waves"},
          {courseID:"GEG401",courseUnit:2,courseTitle:"Technical Communication"}
        ]
      },
      {
        faculty:"Engineering",
        department:"Electrical and Electronics Engineering",
        programe:"Electrical and Electronics Engineering",
        courses:[
          {courseID:"EEG401",courseUnit:2,courseTitle:"Mircoprocessors & Microcomputer"},
          {courseID:"EEG403",courseUnit:2,courseTitle:"Principles of telecommunication"},
          {courseID:"EEG405",courseUnit:2,courseTitle:"Digital Electronics"},
          {courseID:"EEG409",courseUnit:2,courseTitle:"Computer Programming"},
          {courseID:"EEG401",courseUnit:2,courseTitle:"Classical Control System Analysi"},
          {courseID:"EEG405",courseUnit:2,courseTitle:"Electromagentic Waves"},
          {courseID:"EEG401",courseUnit:2,courseTitle:"Technical Communication"}
        ]
      },
  ];

  constructor(public programService:ProgramService) { }

  public getPrograms():ProgramModal[]{
    return this.programs;
  }
  
  public createPrograms(program:ProgramModal){
    let x = this.programs.findIndex(e => e.programe == program.programe)
    console.log(x)
    if(x<0){
      this.programs.push(program)
   }
   else{
     window.alert('this program already exist!!!');
    }
  }

  public getProgram(name:string){
    const program: ProgramModal = this.programs.find(e => e.programe == name);
    return program? program:null;
  }
  public getArray(department:string){
    for(let i=0;i<this.programs.length;i++){
      if(department == this.programs[i].department){
        this.programeList.push(this.programs[i].programe)
      }
    }
    return this.programeList
  }
  public getCourse(progrmae:string){
    for(let i=0;i<this.programs.length;i++){
      if(progrmae == this.programs[i].programe){
        return this.programs[i].courses
      }
    }
  }
}
