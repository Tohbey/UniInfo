import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProgramModalService } from '../services/program-modal.service';
import { ProgramModal } from '../model/programModal';

@Component({
  selector: 'app-programmelist',
  templateUrl: './programmelist.component.html',
  styleUrls: ['./programmelist.component.css']
})
export class ProgrammelistComponent implements OnInit {

  programDetail;
  programs;
  program:ProgramModal
  constructor(private router:Router,public programService:ProgramModalService) { 
    this.programDetail = programService.programs
  }

  ngOnInit() {
    this.programs = this.programService.getPrograms();
  }
  gotoProgram(){
    this.router.navigate(['/programme']);
  }
  editProgram(i){
    console.log(i)
    this.program = this.programService.getPrograms()[i];
    console.log(this.program);
    let programname = this.program.programe;
    console.log(programname);
    this.router.navigate(["/programme",programname])
  }
  deleteProgram(i){
    this.programDetail.splice(i,1);
  }
}
