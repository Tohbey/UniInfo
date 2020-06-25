import { Injectable } from '@angular/core';
import { FacultyModal } from '../model/facultyModal';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
    facultys= [
      {
        facultyName:'Engineering',
        department:['Mechanical Engieerning',"Electrical and Electronics Engineering",
        'Chemical Engineering','Met and Mat Engineering']
      },
      {
        facultyName:'Science',
        department:['Chemistry','Mathematics','Microbiology','Physics',
        'Zoology','Botany','Cell Biology & Genetics']
      },
      {
        facultyName:'Art',
        department:['Creative Arts','Philosophy','English','History & Strategic Studies']
      },
      {
        facultyName:'Law',
        department:['law']
      },
      {
        facultyName:'Social Science',
        department:['Economics','Mass Communications','Social Work','Sociology',
        'Political Sciences','Geography'
      ]
      },
    ]

    constructor(){ }

    public getFacultys():Array<{facultyName:string,department:string[]}>{
      return this.facultys
    }
    
    public createFaculty(faculty:{facultyName:string,department:string[]}){
     console.log(faculty)
     let x = this.facultys.findIndex(e => e.facultyName == faculty.facultyName)
     console.log(x)
     if(x<0){
       this.facultys.push(faculty);
     }
     else{
       window.alert('this faculty already exist!!!');
     }
    }
    
    public getFaculty(name:string){
      const facutly = this.facultys.find(e => e.facultyName == name);
      return facutly? facutly :null;
    }
}
